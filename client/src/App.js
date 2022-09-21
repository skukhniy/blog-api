import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";

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
			}
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/admin/" element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
