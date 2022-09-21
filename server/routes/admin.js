const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");

//
router.get("/login", (req, res) => {});
// recieve login info
router.post("/login");

// add admin
router.post("/signup", async (req, res) => {
	try {
		console.log("trying bcrypt");
		// hash password
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		// model schema
		var admin = new Admin({
			username: req.body.username,
			password: hashedPassword,
		});
		// saves user to the DB
		admin.save(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.status(201).json(admin);
			}
		});
	} catch (error) {
		console.log("bycrypt failed :(");
		console.error(error);
	}
});

module.exports = router;
