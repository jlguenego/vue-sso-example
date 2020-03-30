const express = require("express");
const serveIndex = require("serve-index");

const app = express();
app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => console.log("Server started on port 3000"));
