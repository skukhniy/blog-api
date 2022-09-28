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
		<div className="border me-1 ms-1 p-2 mt-3 shadow" style={{ width: "30%" }}>
			<Link className="text-decoration-none text-dark" to={postLink}>
				<img src={post.img} style={{ height: "auto", width: "100%" }}></img>
				<h3>{post.title}</h3>
			</Link>
			<p>{`${post.content.substring(0, 50)}...`}</p>
		</div>
	);
}
