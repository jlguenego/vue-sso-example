import express from "express";
import serveIndex from "serve-index";
import { sso, UserCredential } from "node-expose-sspi";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(
  session({
    secret: "this is my secret session...",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/protected", (req, res, next) => {
  if (!req.session.sso) {
    return res.status(401).end();
  }
  next();
});

app.use("/protected/secret", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/action/connect-with-sso", sso.auth(), (req, res) => {
  if (!req.sso) {
    delete req.session.sso;
    res.status(401).end();
    return;
  }
  req.session.sso = req.sso;
  res.json({ user: req.sso.user });
});

app.post("/action/connect", async (req, res) => {
  try {
    let credentials: UserCredential = {
      domain: sso.getDefaultDomain(),
      user: req.body.login,
      password: req.body.password
    };
    const domainSeparator = "\\";
    if (req.body.login.indexOf(domainSeparator) !== -1) {
      const [domain, user] = (req.body.login as string).split(domainSeparator);
      console.log("req.body.login: ", req.body.login);
      console.log("domain: ", domain);

      credentials = {
        domain,
        user,
        password: req.body.password
      };
    }

    console.log("credentials: ", credentials);
    req.session.sso = await sso.connect(credentials);
    res.json({ user: req.session.sso.user });
  } catch (error) {
    console.log("error: ", error);
    res.status(401).end();
  }
});

app.use("/action/disconnect", (req, res) => {
  delete req.session.sso;
  res.end();
});

const www = "../front/dist";
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
