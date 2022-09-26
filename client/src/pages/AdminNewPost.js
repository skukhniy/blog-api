import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function AdminNewPost() {
	const [title, setTitle] = useState(null);
	const [content, setContent] = useState(null);
	const [topic, setTopic] = useState(null);
	const [published, setPublished] = useState(false);

	const newPost = async () => {
		console.log("save button clicked");
		await axios({
			method: "post",
			data: {
				title: title,
				content: content,
				topic: topic,
				published: published,
				date: Date.now(),
			},
			withCredentials: true,
			url: `http://localhost:4000/api/`,
		}).then((res) => {
			console.log(res);
		});
	};

	return (
		<div className="">
			<h4 className="text-center mb-4">Add a New Post</h4>

			<div className="d-flex justify-content-center">
				<div className="" style={{ width: "50%" }}>
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
									rows={5}
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
									<option value={true}>true</option>
									<option value={false}>false</option>
								</Form.Select>
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>

			<div className="d-flex justify-content-center mt-4">
				<a href="/admin">
					<Button type="submit" onClick={newPost}>
						Save
					</Button>
				</a>
			</div>
		</div>
	);
}
