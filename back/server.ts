import express from "express";
import serveIndex from "serve-index";
import { sso } from "node-expose-sspi";
import session from "express-session";

const app = express();

app.use(session({ secret: "this is my secret session..." }));

app.use("/protected", (req, res, next) => {
  if (!req.session.sso) {
    return res.status(401).end();
  }
  next();
});

app.use("/protected/secret", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/action/connect", sso.auth(), (req, res) => {
  if (req.sso) {
    req.session.sso = req.sso;
    res.json({ user: req.sso.user });
    return;
  }
  delete req.session.sso;
  res.status(401).end();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
