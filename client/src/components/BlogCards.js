import React from "react";

export default function BlogCards({ post }) {
	// format date
	const date = new Date(post.date);
	return (
		<div className="border me-3 ms-3 p-3">
			<h3>{post.title}</h3>
			<p>{post.content}</p>
			<p>{date.toLocaleDateString()}</p>
		</div>
	);
}
