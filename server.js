import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";
import authRoutes from "./routes/auth.route.js";
import placesRoutes from "./routes/places.route.js";
import bookingsRoutes from "./routes/bookings.route.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/places", protectRoute, placesRoutes);
app.use("/api/v1/bookings", protectRoute, bookingsRoutes);

app.get('/api/test', (req,res) => {
  res.json('test ok');
});

app.listen(PORT, () => {
  console.log("listening on port at http://localhost:" + PORT);
  connectDB();
});
