import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function AdminEditPost({ post }) {
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);
	const [topic, setTopic] = useState(post.topic);
	const [published, setPublished] = useState(post.published);

	const updatePost = async () => {
		console.log("save button clicked");
		await axios({
			method: "patch",
			data: {
				title: title,
				content: content,
				topic: topic,
				published: true,
				date: Date.now(),
			},
			withCredentials: true,
			url: `http://localhost:4000/api/${post._id}/`,
		}).then((res) => {
			console.log(res);
		});
	};

	return (
		<div className="">
			<h4 className="text-center">Post ID: {post._id}</h4>
			<Container>
				<Row className="mt-3">
					<Col xs={5}></Col>
					<Col>
						<label className="">Title:</label>
					</Col>
					<Col>
						<input
							value={title}
							name="title"
							onChange={(e) => setTitle(e.target.value)}
						></input>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row className="mt-3">
					<Col xs={5}></Col>
					<Col>
						<label className="">Content:</label>
					</Col>
					<Col>
						<textarea
							value={content}
							name="content"
							onChange={(e) => setContent(e.target.value)}
						>
							{post.content}{" "}
						</textarea>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row className="mt-3">
					<Col xs={5}></Col>
					<Col>
						<label>Topic:</label>
					</Col>
					<Col>
						<input
							className=""
							value={topic}
							name="topic"
							onChange={(e) => setTopic(e.target.value)}
						></input>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row className="mt-3">
					<Col xs={5}></Col>
					<Col>
						<label>Published:</label>
					</Col>
					<Col>
						<select onChange={(e) => setPublished(e.target.value)}>
							<option>true</option>
							<option>false</option>
						</select>
					</Col>
					<Col xs={5}></Col>
				</Row>
			</Container>
			<div className="d-flex justify-content-center mt-4">
				<button className="" onClick={updatePost}>
					Save
				</button>
			</div>
		</div>
	);
}
