const express = require("express");
const router = express.Router();
const controller = require("../controllers/apiController");

// get all posts
router.get("/", controller.getPosts);

// get one post
router.get("/:id", controller.getPost, controller.getOnePost);

// create post
router.post("/", controller.saveImg.single("img"), controller.createPost);

// update post
router.patch(
	"/:id",
	controller.saveImg.single("img"),
	controller.getPost,
	controller.updatePost
);

// delete post
router.delete("/:id", controller.getPost, controller.deletePost);

module.exports = router;
