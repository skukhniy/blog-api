import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogCards from "../components/BlogCards";
import Button from "react-bootstrap/esm/Button";

export default function Admin({ adminData, setAdmin, posts }) {
	return (
		<div className="text-center">
			{adminData ? (
				<h1 className="mb-4">Welcome Back {adminData.username} </h1>
			) : (
				<h1>Authentication Failed</h1>
				// <Navigate to="/admin/login" />
			)}
			<Link to="/admin/newpost">
				<Button className="mb-4">Add a New Post</Button>
			</Link>
			{posts &&
				posts.map((post) => <BlogCards post={post} adminCheck={false} />)}
		</div>
	);
}
