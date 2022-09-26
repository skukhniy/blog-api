import React from "react";
import { Link } from "react-router-dom";

export default function BlogCards({ post, adminCheck }) {
	// format date
	const date = new Date(post.date);

	let postLink;
	if (adminCheck) {
		postLink = `/post/${post._id}`;
	} else {
		postLink = `/admin/post/${post._id}`;
	}

	return (
		<div className="border me-3 ms-3 p-3 mt-3">
			<Link className="text-decoration-none text-dark" to={postLink}>
				<h3>{post.title}</h3>
			</Link>
			<p>{`${post.content.substring(0, 50)}...`}</p>
		</div>
	);
}
