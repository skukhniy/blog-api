const express = require("express");
const { off } = require("../app");
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
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
		topic: req.body.topic,
		published: req.body.published,
		date: req.body.date,
	});

	try {
		console.log(post);
		const newPost = await post.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(400).json({ message: err.message });
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
