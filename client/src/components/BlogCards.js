import "../styles/App.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCards({ post, adminCheck }) {
	// format date
	let date = new Date(post.date);
	date = date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	// format preview text
	let content = post.content;
	content = content.replace(/<\/?[^>]+(>|$)/g, "");

	let postLink;
	if (adminCheck) {
		postLink = `/administrator/post/${post._id}`;
		content = content.split(" ").slice(0, 10).join(" ") + "...";
	} else {
		postLink = `/post/${post._id}`;
		content = content.split(" ").slice(0, 25).join(" ") + "...";
	}

	return (
		<div
			className={`border me-1 ms-1 p-2 mt-3 shadow ${
				adminCheck ? "adminBlogCard" : "blogCard"
			}`}
		>
			<Link className="text-decoration-none text-dark" to={postLink}>
				<img src={post.img}></img>
				<h3>{post.title}</h3>
				<p>{date}</p>
				<p>{content}</p>
			</Link>
			{/* <p>{`${post.content.substring(0, 50)}...`}</p> */}
		</div>
	);
}
