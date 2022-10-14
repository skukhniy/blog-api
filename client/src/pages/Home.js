import React from "react";
import BlogCards from "../components/BlogCards";
import me from "../assets/imgs/Me.png";

export default function Home({ posts }) {
	// generate cards for each post
	// const renderCards = posts.map((post) => <BlogCards post={post} />);
	console.log(posts);
	let filteredPosts = posts;
	// if not null, return a filtered array of posts
	if (filteredPosts !== null) {
		// sort by published === true
		filteredPosts = filteredPosts.filter((post) => post.published);
		// sort by newest date to oldest date
		filteredPosts = filteredPosts.sort((a, b) => {
			var dateA = new Date(a.date);
			var dateB = new Date(b.date);
			return dateB - dateA;
		});
		console.log(filteredPosts);
	}
	return (
		<div className="">
			<div className="homeHeader d-sm-flex-col text-center">
				<img className="rounded-circle headerPic" src={me} alt="Its me!"></img>
				<h2 className="text-center mt-0 mb-0 font-weight-bolder">
					Stanislav Kukhniy
				</h2>
				<p className="text-center">
					Welcome to my blog! This is where I track my progress in learning web
					development, and software engineering in general.
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
