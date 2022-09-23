import React from "react";

export default function AdminEditPost({ post }) {
	return (
		<div className="text-center">
			<h4>Post ID: {post._id}</h4>
			<div>
				<label>Title:</label>
				<input placeholder={post.title}></input>
			</div>
			<div>
				<label>Content:</label>
				<input placeholder={post.content}></input>
			</div>
			<button>Save</button>
		</div>
	);
}
