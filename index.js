const express = require("express");
const app = express();
const port = 3000;
const urlPort = "http://localhost:" + port;

// imports
const postsRouter = require("./app/routers/posts");

// middlewares
app.use(express.static("./public"));
app.use(express.json());

// Rotte
app.use("/posts", postsRouter);

// Avvio Server
app.listen(port, () => {
  console.log("Server avviato " + urlPort);
});
