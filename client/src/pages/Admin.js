import React, { useEffect, useState } from "react";
import Login from "./Login";
import axios from "axios";

export default function Admin() {
	const [adminData, setAdmin] = useState(null);

	useEffect(() => {
		const getAdmin = () => {
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
		getAdmin();
	}, []);

	return (
		<div className="text-center">
			{adminData ? (
				<h1>Welcome Back {adminData.username} </h1>
			) : (
				<Login setAdmin={setAdmin} adminData={adminData} />
			)}
		</div>
	);
}
