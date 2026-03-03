const express = require("express");
const router = express.Router();
const postsData = require("../data/postsData.json");

// INDEX - GET /posts
router.get("/", (req, res) => {
  const responseData = {
    result: postsData,
    success: true,
  };
  res.json(responseData);
});

// SHOW - GET /posts/:id
router.get("/:id", (req, res) => {
  const post = postsData.find((p) => p.id === parseInt(req.params.id));
  const responseData = {
    result: post,
    success: true,
  };
  res.json(responseData);
});

// CREATE - POST /posts
router.post("/", (req, res) => {
  postsData.push(req.body);
  const responseData = {
    result: req.body,
    success: true,
  };
  res.json(responseData);
});

// UPDATE - PUT /posts/:id
router.put("/:id", (req, res) => {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  postsData[index] = req.body;
  const responseData = {
    result: postsData[index],
    success: true,
  };
  res.json(responseData);
});

// PATCH - PATCH /posts/:id
router.patch("/:id", (req, res) => {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  postsData[index] = { ...postsData[index], ...req.body };
  const responseData = {
    result: postsData[index],
    success: true,
  };
  res.json(responseData);
});

// DELETE - DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  const deleted = postsData.splice(index, 1);
  const responseData = {
    result: deleted[0],
    success: true,
  };
  res.json(responseData);
});

module.exports = router;
