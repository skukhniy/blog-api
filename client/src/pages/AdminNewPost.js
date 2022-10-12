import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import TextEditor from "../components/TextEditor";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function AdminNewPost() {
	const [title, setTitle] = useState(null);
	const [content, setContent] = useState(null);
	const [editor, setEditor] = useState(null);
	const [topic, setTopic] = useState(null);
	const [published, setPublished] = useState(false);
	const [img, setImg] = useState(null);
	const [alert, setAlert] = useState("");

	const newPost = async () => {
		console.log("save button clicked");

		let data = new FormData();
		data.append("title", title);
		data.append("content", editor.getHTML());
		data.append("topic", topic);
		data.append("published", published);
		data.append("date", Date.now());
		data.append("img", img);

		const config = {
			headers: { "content-type": "multipart/form-data" },
		};

		await axios.post(`/api/`, data, config).then((res) => {
			console.log(res);
			console.log(img);
			setAlert("New Post Saved");
		});
	};

	return (
		<div className="">
			<h4 className="text-center mb-4 pt-3">Add a New Post</h4>

			<div>
				{alert ? (
					<p className="text-center mt-2 text-success">{alert}</p>
				) : (
					<p></p>
				)}
			</div>
			<div className="d-flex justify-content-center mb-4">
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
								Published:
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
						<Form.Group as={Row} className="mb-3">
							<Form.Label as="legend" column sm={2}>
								Image:
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									onChange={(e) => setImg(e.target.files[0])}
									type="file"
								></Form.Control>
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>
			<TextEditor editor={editor} setEditor={setEditor} />

			<div className="d-flex justify-content-center mt-4">
				<Button type="submit" onClick={newPost}>
					Save
				</Button>
			</div>
		</div>
	);
}
