const express = require("express");
const { off } = require("../app");
const uuidv4 = require("uuid/v4");
const multer = require("multer");
const Post = require("../models/posts");

// get all posts
exports.getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
	// res.json("Get Posts");
};

// grab a specific post
exports.getOnePost = (req, res) => {
	res.json(res.post);
};

// create a post
exports.createPost = async (req, res) => {
	console.log(req.body);
	const url = req.protocol + "://" + req.get("host");
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
		topic: req.body.topic,
		published: req.body.published,
		date: req.body.date,
		img: url + "/public/images/" + req.file.filename,
	});

	try {
		console.log(post);
		const newPost = await post.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(400).json({ message: err.message });
		console.log(req);
	}
};

// update post
exports.updatePost = async (req, res) => {
	if (req.body.title != null) {
		res.post.title = req.body.title;
	}
	if (req.body.content != null) {
		res.post.content = req.body.content;
	}
	if (req.body.topic != null) {
		res.post.topic = req.body.topic;
	}
	if (req.body.published != null) {
		res.post.published = req.body.published;
	}
	if (req.body.date != null) {
		res.post.date = req.body.date;
	}
	try {
		const updatedPost = await res.post.save();
		res.json(updatedPost);
	} catch (err) {
		res.status(400).json({ message: "error" });
	}
};

// delete post
exports.deletePost = async (req, res) => {
	try {
		await res.post.remove();
		res.json({ message: "Post Deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// middleware to grab a specific post object
exports.getPost = async (req, res, next) => {
	let post;
	try {
		post = await Post.findById(req.params.id);
		if (post == null) {
			return res.status(404).json({ message: "Cannot find post" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.post = post;
	next();
};

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(" ").join("-");
		cb(null, uuidv4() + "-" + fileName);
	},
});

exports.saveImg = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			console.log("image saved");
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	},
});
