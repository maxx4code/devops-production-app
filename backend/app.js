const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from Production DevOps Server");
});

app.listen(3000, () => console.log("Backend running"));
