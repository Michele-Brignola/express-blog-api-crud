const postsData = require("../data/postsData");

function index(req, res) {
  let posts = [...postsData];
  const responseData = {
    result: posts,
    message: "Lista della pizze",
    success: true,
  };
  res.json(responseData);
}

function show(req, res) {
  let posts = [...postsData];
  const postId = parseInt(req.params.id);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const responseData = {
      message: `Post ${postId} non trovato`,
      success: false,
    };

    return res.status(404).json(responseData);
  }

  const responseData = {
    result: post,
    message: "Dettagli del post " + postId,
    success: true,
  };
  res.json(responseData);
}

function store(req, res) {
  let posts = [...postsData];
  const { title, content, image, tags } = req.body;

  let maxId = 0;
  posts.forEach((post) => {
    if (post.id > maxId) maxId = post.id;
  });
  const newPostId = maxId + 1;

  const newPost = {
    id: newPostId,
    title: title.trim(),
    content,
    image,
    tags,
  };

  postsData.push(newPost);

  const responseData = {
    result: newPost,
    message: "Post creato",
    success: true,
  };
  res.json(responseData);
}

function update(req, res) {
  let posts = [...postsData];
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const responseData = {
      message: `Post ${postId} non trovato`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  const responseData = {
    result: post,
    message: "Modificato il post " + postId,
    success: true,
  };
  res.json(responseData);
}

function modify(req, res) {
  let posts = [...postsData];
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const responseData = {
      message: `Post ${postId} non trovato`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.image) post.image = req.body.image;
  if (req.body.tags) post.tags = req.body.tags;

  const responseData = {
    result: post,
    message: "Modificato parzialmente il post " + postId,
    success: true,
  };
  res.json(responseData);
}

function destroy(req, res) {
  let posts = [...postsData];
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const responseData = {
      message: `Post ${postId} non trovato`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  const index = postsData.findIndex((post) => post.id === postId);
  postsData.splice(index, 1);

  const responseData = {
    result: post,
    message: "Eliminato il post " + postId,
    success: true,
  };
  res.json(responseData);
}

module.exports = { index, show, store, update, modify, destroy };
