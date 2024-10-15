import express from 'express';
import { addbookings, getbookings } from '../controllers/bookings.controller.js';

const router = express.Router();

router.post("/add-bookings", addbookings);
router.get("/get-bookings", getbookings);

export default router;
