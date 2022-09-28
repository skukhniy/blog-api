import React from "react";

export default function PicUpload() {
	return (
		<div className="container d-flex justify-content-center text-center">
			<div className="row">
				<form>
					<h3>React File Upload</h3>
					<div className="form-group">
						<input type="file" />
					</div>
					<div className="form-group">
						<button className="btn btn-primary" type="submit">
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
