const jwt = require("jsonwebtoken");
const { ENV_VARS } = require("../config/envVars.js");

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-airbnb", token, {
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in MS
		httpOnly: true,
		sameSite: "strict",
		secure: ENV_VARS.NODE_ENV !== "development",
	});

	return token;
};

module.exports = generateTokenAndSetCookie;