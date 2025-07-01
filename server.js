import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("4000");
});
app.listen(3000, () => {
  console.log("server is running fine");
});
