const express = require("express");
const app = express();
const port = 3000;
const urlPort = "http://localhost:" + port;

// imports
const postsRouter = require("./app/routers/posts");
const errorsHandler = require("./app/middlewares/errorsHandler");

// middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(errorsHandler);

// Rotte
app.use("/posts", postsRouter);

// Avvio Server
app.listen(port, () => {
  console.log("Server avviato " + urlPort);
});
