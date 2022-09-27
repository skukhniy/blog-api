const LocalStrategy = require("passport-local").Strategy;
const Admin = require("./models/admin");
const bcrypt = require("bcrypt");

function initalize(passport) {
	// check if login matches admin
	const authenticateUser = async (username, password, done) => {
		Admin.findOne({ username: username }, (err, user) => {
			if (err) throw err;
			if (!user) return done(null, false);
			bcrypt.compare(password, user.password, (err, result) => {
				if (err) throw err;
				if (result == true) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			});
		});
	};

	// init passport
	passport.use(
		new LocalStrategy({ usernameField: "username" }, authenticateUser)
	);
	passport.serializeUser((user, callback) => {
		callback(null, user.id);
	});
	passport.deserializeUser((id, callback) => {
		Admin.findOne({ _id: id }, (err, user) => {
			const userInfo = {
				username: user.username,
			};
			callback(err, userInfo);
		});
	});
}

module.exports = initalize;
