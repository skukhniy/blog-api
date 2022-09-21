import React from "react";

export default function PostPage({ post }) {
	return (
		<div className="mt-5 d-flex flex-column justify-content-center text-center">
			<h1 className="">{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}
