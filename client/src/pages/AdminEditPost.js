import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

			<div className="d-flex justify-content-center">
				<div className="" style={{ width: "30%" }}>
					<Form>
						<Form.Group as={Row} className="mb-3">
							<Form.Label column sm={2}>
								Title:
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3">
							<Form.Label column sm={2}>
								Content:
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									as="textarea"
									rows={3}
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3">
							<Form.Label column sm={2}>
								Topic:
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									value={topic}
									onChange={(e) => setTopic(e.target.value)}
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3">
							<Form.Label as="legend" column sm={2}>
								Published
							</Form.Label>
							<Col sm={10}>
								<Form.Select
									defaultValue={`${published}`}
									onChange={(e) => setPublished(e.target.value)}
								>
									<option>true</option>
									<option>false</option>
								</Form.Select>
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>

			<div className="d-flex justify-content-center mt-4">
				<Button type="submit" onClick={updatePost}>
					Save
				</Button>
				{/* <Button type="submit">Save</Button> */}
			</div>
		</div>
	);
}
