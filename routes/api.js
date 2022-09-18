const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json("Get Posts");
});

module.exports = router;
