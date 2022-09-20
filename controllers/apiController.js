const express = require("express");
const Posts = require("../models/posts");

// get all posts
exports.getPosts = async (req, res) => {
	try {
		const posts = await Posts.find();
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
		const newPost = await post.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

exports.updatePost = (req, res) => {
	res.json(`update post ${req.params.id}`);
};

exports.deletePost = (req, res) => {
	res.json(`delete post ${req.params.id}`);
};
