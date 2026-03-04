const express = require("express");
const router = express.Router();
const postsContoller = require("../controllers/postsController");

router.get("/", postsContoller.index);
router.get("/:id", postsContoller.show);
router.post("/", postsContoller.store);
router.put("/:id", postsContoller.update);
router.patch("/:id", postsContoller.modify);
router.delete("/:id", postsContoller.destroy);

module.exports = router;
