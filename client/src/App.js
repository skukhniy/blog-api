import "./styles/App.scss";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PostPage from "./pages/PostPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import axios from "axios";
import AdminEditPost from "./pages/AdminEditPost";

function App() {
	const [posts, setPosts] = useState(null);
	const [adminData, setAdmin] = useState(null);
	// sets state and grabs post API
	// will only fire one time
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("http://localhost:4000/api/");
			const json = await response.json();

			if (response.ok) {
				setPosts(json);
				console.log(json);
			}
		};
		const checkAdmin = () => {
			axios({
				method: "get",
				withCredentials: true,
				url: "http://localhost:4000/admin/login",
			}).then((res) => {
				console.log(res);
				if (res.data) {
					setAdmin(res.data);
				} else {
					setAdmin(null);
				}
			});
		};
		fetchPosts();
		checkAdmin();
	}, []);

	// create individual pages for each blog post
	let postRoutes;
	if (posts) {
		postRoutes = posts.map((post) => (
			<Route path={`/post/${post._id}`} element={<PostPage post={post} />} />
		));
	}

	let adminPostRoutes;
	if (posts) {
		adminPostRoutes = posts.map((post) => (
			<Route
				path={`/admin/post/${post._id}`}
				element={<AdminEditPost post={post} />}
			/>
		));
	}

	return (
		<div>
			<BrowserRouter>
				<NavBar adminData={adminData} />
				<Routes>
					<Route exact path="/" element={<Home posts={posts} />} />
					<Route
						exact
						path="/admin/"
						element={
							adminData ? (
								<Admin
									adminData={adminData}
									setAdmin={setAdmin}
									posts={posts}
								/>
							) : (
								<Navigate to="/admin/login" />
							)
						}
					/>
					<Route
						exact
						path="/admin/login"
						element={
							adminData ? (
								<Navigate to="/admin" />
							) : (
								<Login adminData={adminData} setAdmin={setAdmin} />
							)
						}
					/>
					{posts && postRoutes}
					{posts && adminPostRoutes}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
