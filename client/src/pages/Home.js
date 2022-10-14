import React from "react";
import BlogCards from "../components/BlogCards";

export default function Home({ posts }) {
	// generate cards for each post
	// const renderCards = posts.map((post) => <BlogCards post={post} />);
	console.log(posts);
	let filteredPosts = posts;
	if (filteredPosts !== null) {
		filteredPosts = filteredPosts.filter((post) => post.published);
		console.log(filteredPosts);
	}
	return (
		<div className="">
			<div
				style={{
					backgroundColor: "lightgrey",
					"padding-top": "50px",
					"padding-bottom": "50px",
				}}
			>
				<h1 className="text-center mt-0 mb-0">Welcome!</h1>
				<p className="text-center">
					This is a blog where I track my progress in becoming a web developer.
				</p>
			</div>
			<div
				className="d-flex justify-content-center flex-wrap text-center"
				style={{ "margin-left": "10%", "margin-right": "10%" }}
			>
				{filteredPosts &&
					filteredPosts.map((post) => (
						<BlogCards post={post} adminCheck={false} />
					))}
			</div>
		</div>
	);
}
