import React from "react";
import BlogCards from "../components/BlogCards";

export default function Home({ posts }) {
	// generate cards for each post
	// const renderCards = posts.map((post) => <BlogCards post={post} />);
	console.log(posts);
	return (
		<div>
			<h1 className="text-center mb-5 mt-4">Welcome to the Blog!</h1>
			<div className="d-flex justify-content-center">
				{posts && posts.map((post) => <BlogCards post={post} />)}
			</div>
		</div>
	);
}
