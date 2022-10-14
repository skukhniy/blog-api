import React from "react";
import parse from "html-react-parser";

export default function PostPage({ post }) {
	const date = new Date(post.date);
	return (
		<div className="d-flex justify-content-center postPage">
			<div
				className="pt-4 pe-3 ps-3 d-flex flex-column w-75"
				style={{ backgroundColor: "white", height: "100%" }}
			>
				<h1 className="mb-2">{post.title}</h1>
				<p className="mb-4">{`Posted on ${date.toDateString()}`}</p>
				<img src={post.img}></img>
				<div className="mt-4 pe-2 ps-2">{parse(post.content)}</div>
			</div>
		</div>
	);
}
