import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

export default function Admin({ adminData, setAdmin }) {
	// useEffect(() => {
	// 	const checkAdmin = () => {
	// 		axios({
	// 			method: "get",
	// 			withCredentials: true,
	// 			url: "http://localhost:4000/admin/login",
	// 		}).then((res) => {
	// 			console.log(res);
	// 			if (res.data) {
	// 				setAdmin(res.data);
	// 			} else {
	// 				setAdmin(null);
	// 			}
	// 		});
	// 	};
	// 	checkAdmin();
	// }, []);

	return (
		<div className="text-center">
			{adminData ? (
				<h1>Welcome Back {adminData.username} </h1>
			) : (
				<h1>Authentication Failed</h1>
				// <Navigate to="/admin/login" />
			)}
		</div>
	);
}
