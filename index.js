const express = require("express");
const app = express();
const port = 3000;
const urlPort = "http://localhost:" + port;

// imports
const postsRouter = require("./app/routers/posts");

// middlewares
app.use(express.static("./public"));

// Rotte
app.get("/", (req, res) => {
  const responseData = {
    message: "Server del mio blog",
    success: true,
  };
  res.json(responseData);
});

app.use("/posts", postsRouter);

// Avvio Server
app.listen(port, () => {
  console.log("Server avviato");
  console.log("url " + urlPort);
});
