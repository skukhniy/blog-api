import React, { useState } from "react";
import axios from "axios";

export default function Login({ setAdmin }) {
	const [loginUsername, setUsername] = useState("");
	const [loginPassword, setPassword] = useState("");

	const login = async () => {
		await axios({
			method: "post",
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url: "http://localhost:4000/admin/login",
		}).then((res) => {
			console.log(res);
			axios({
				method: "get",
				withCredentials: true,
				url: "http://localhost:4000/admin/login",
			}).then((res) => {
				console.log(res);
				setAdmin(res.data);
			});
		});
	};

	return (
		<div className="text-center">
			<h1 className="mb-4">Login</h1>
			<div className="mb-2">
				<label className="me-1" for="username">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label className="me-2" for="password">
					Password
				</label>
				<input
					type="text"
					id="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button onClick={login} type="submit">
				Login
			</button>
		</div>
	);
}
