const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");
const controller = require("../controllers/loginController");
const passport = require("passport");

// get user info after authenticated
router.get("/login", (req, res) => {
	res.send(req.user);
});

// recieve login info
router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send("Incorrect User or Password");
		// if (!user) res.send(user);
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.send("Succesfully Authenticated");
				console.log(req.user);
			});
		}
	})(req, res, next);
});

// add admin
router.post("/signup", controller.addAdmin);

module.exports = router;
