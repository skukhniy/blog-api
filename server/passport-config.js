const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initalize(passport) {
	// check if login matches admin
	const authenticateUser = async (username, password, done) => {
		const user = getUserByUsername(username);
		if (user == null) {
			return done(null, false, { message: "No admin with that username" });
		}
		// compare password w/ hashed password
		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, { message: "Password incorrect" });
			}
		} catch (e) {
			return done(e);
		}
	};

	// init passport
	passport.use(
		new LocalStrategy({ usernameField: "username" }, authenticateUser)
	);
	passport.serializeUser((user, done) => {});
	passport.deserializeUser((id, done) => {});
}

module.exports = initalize;
