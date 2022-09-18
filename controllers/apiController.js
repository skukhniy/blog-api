const express = require("express");

exports.getPosts = (req, res) => {
	res.json("Get Posts");
};

exports.createPost = (req, res) => {
	res.json("Create Post");
};

exports.updatePost = (req, res) => {
	res.json(`update post ${req.params.id}`);
};

exports.deletePost = (req, res) => {
	res.json(`delete post ${req.params.id}`);
};
