const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const ENV_VARS = require("./config/envVars.js");
const connectDB = require("./config/db.js");
const protectRoute = require("./middleware/protectRoute.js");
const authRoutes = require("./routes/auth.route.js");
const placesRoutes = require("./routes/places.route.js");
const bookingsRoutes = require("./routes/bookings.route.js");

const app = express();
const PORT = ENV_VARS.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/places", protectRoute, placesRoutes);
app.use("/api/v1/bookings", protectRoute, bookingsRoutes);

app.get("/", (req, res) => {
  res.json("test ok");
});

app.listen(PORT, () => {
  console.log("listening on port at http://localhost:" + PORT);
  connectDB();
});
