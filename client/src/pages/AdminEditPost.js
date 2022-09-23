import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AdminEditPost({ post }) {
	return (
		<div className="">
			<h4 className="text-center">Post ID: {post._id}</h4>
			<Container>
				<Row>
					<Col xs={5}></Col>
					<Col>
						<label className="">Title:</label>
					</Col>
					<Col>
						<input value={post.title}></input>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row>
					<Col xs={5}></Col>
					<Col>
						<label className="">Content:</label>
					</Col>
					<Col>
						<textarea value={post.content}>{post.content}</textarea>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row>
					<Col xs={5}></Col>
					<Col>
						<label>Topic:</label>
					</Col>
					<Col>
						<input className="" value={post.topic}></input>
					</Col>
					<Col xs={4}></Col>
				</Row>
				<Row>
					<Col xs={5}></Col>
					<Col>
						<label>Topic:</label>
					</Col>
					<Col>
						<input className="" value={post.topic}></input>
					</Col>
					<Col xs={4}></Col>
				</Row>
			</Container>
			<div className="d-flex justify-content-center mt-4">
				<button className="">Save</button>
			</div>
		</div>
	);
}
