import express from "express";
import serveIndex from "serve-index";

const app = express();

app.use("/protected/secret", (req, res) => {
  res.json({ hello: "world" });
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
