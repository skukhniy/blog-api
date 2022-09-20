const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	content: String,
	topic: String,
	published: Boolean,
	date: Date,
});

module.exports = mongoose.model("posts", PostSchema);
