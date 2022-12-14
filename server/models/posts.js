const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	title: String,
	content: String,
	topic: String,
	published: Boolean,
	date: Date,
	img: String,
});

module.exports = mongoose.model("posts", PostSchema);
