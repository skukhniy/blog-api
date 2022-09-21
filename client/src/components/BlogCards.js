import React from "react";
import { Link } from "react-router-dom";

export default function BlogCards({ post }) {
	// format date
	const date = new Date(post.date);
	return (
		<div className="border me-3 ms-3 p-3">
			<Link className="text-decoration-none text-dark" to={`/post/${post._id}`}>
				<h3>{post.title}</h3>
			</Link>
			<p>{post.content}</p>
			<p>{date.toLocaleDateString()}</p>
		</div>
	);
}
