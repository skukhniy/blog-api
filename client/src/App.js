import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
	const [posts, setPosts] = useState(null);

	// sets state and grabs post API
	// will only fire one time
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/");
			const json = await response.json();

			if (response.ok) {
				setPosts(json);
				console.log(json);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home posts={posts} />} />
					<Route exact path="/admin/" element={<Admin posts={posts} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
