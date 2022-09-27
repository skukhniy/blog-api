const Admin = require("../models/admin");
const passport = require("passport");

exports.checkAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log("is authenticated");
		return next();
	}
	console.log("user is not authenticated");
	res.redirect("/login");
};

exports.checkNotAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log("user is authenticated");
		res.redirect("/");
	}
	console.log("user is not authenticated");
	next();
};

exports.loginAuthentication = passport.authenticate("local", {
	sucessRedirect: "/",
	failureRedirect: "/login",
});

exports.addAdmin = async (req, res) => {
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
};
