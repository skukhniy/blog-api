import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogCards from "../components/BlogCards";
import Button from "react-bootstrap/esm/Button";

export default function Admin({ adminData, setAdmin, posts }) {
	// func that reaches out to the server to unauthenticate the user and logout
	const logout = async () => {
		await axios({
			method: "post",
			withCredentials: true,
			url: "/admin/logout",
		}).then((res) => {
			console.log(res);
			setAdmin(null);
		});
	};
	return (
		<div className="text-center">
			{adminData ? (
				<h1 className="mb-4 mt-4">Welcome Back {adminData.username} </h1>
			) : (
				<h1>Authentication Failed</h1>
				// <Navigate to="/admin/login" />
			)}

			<Link to="/administrator/newpost">
				<Button className="mb-4">Add a New Post</Button>
			</Link>
			<div
				className="d-flex justify-content-center flex-wrap"
				style={{ "margin-left": "10%", "margin-right": "10%" }}
			>
				{/* render posts */}
				{posts &&
					posts
						.sort((a, b) => {
							// sort by newest date to oldest date
							var dateA = new Date(a.date);
							var dateB = new Date(b.date);
							return dateB - dateA;
						})
						.map((post) => <BlogCards post={post} adminCheck={true} />)}
			</div>
			<div>
				<button className="mt-4 mb-3" onClick={logout}>
					Logout
				</button>
			</div>
		</div>
	);
}
