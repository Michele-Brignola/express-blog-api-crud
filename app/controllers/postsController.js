const postsData = require("../data/postsData.json");

function index(req, res) {
  const responseData = {
    result: postsData,
    success: true,
  };
  res.json(responseData);
}

function show(req, res) {
  const post = postsData.find((p) => p.id === parseInt(req.params.id));
  const responseData = {
    result: post,
    success: true,
  };
  res.json(responseData);
}

function store(req, res) {
  postsData.push(req.body);
  const responseData = {
    result: req.body,
    success: true,
  };
  res.json(responseData);
}

function update(req, res) {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  postsData[index] = req.body;
  const responseData = {
    result: postsData[index],
    success: true,
  };
  res.json(responseData);
}

function modify(req, res) {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  postsData[index] = { ...postsData[index], ...req.body };
  const responseData = {
    result: postsData[index],
    success: true,
  };
  res.json(responseData);
}

function destroy(req, res) {
  const index = postsData.findIndex((p) => p.id === parseInt(req.params.id));
  const deleted = postsData.splice(index, 1);
  const responseData = {
    result: deleted[0],
    success: true,
  };
  res.json(responseData);
}

module.exports = { index, show, store, update, modify, destroy };
