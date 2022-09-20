const express = require("express");
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

exports.getOnePost = (req, res) => {
	res.json(`Get Post ${req.params.id}`);
};

// create a post
exports.createPost = async (req, res) => {
	const post = new Post({
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
exports.updatePost = (req, res) => {
	res.json(`update post ${req.params.id}`);
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
