const express = require('express');
const { addbookings, getbookings } = require('../controllers/bookings.controller.js');

const router = express.Router();

router.post("/add-bookings", addbookings);
router.get("/get-bookings", getbookings);

module.exports = router;
