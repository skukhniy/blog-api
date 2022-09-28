import React from "react";

export default function PostPage({ post }) {
	const date = new Date(post.date);
	return (
		<div
			className="d-flex justify-content-center"
			style={{ backgroundColor: "lightgreen" }}
		>
			<div
				className="pt-4 pe-3 ps-3 d-flex flex-column text-center w-75"
				style={{ backgroundColor: "white", height: "100%" }}
			>
				<h1 className="mb-2">{post.title}</h1>
				<p className="mb-4">{`Posted on ${date.toDateString()}`}</p>
				<img src={post.img}></img>
				<p className="mt-2 p-4">{post.content}</p>
			</div>
		</div>
	);
}
