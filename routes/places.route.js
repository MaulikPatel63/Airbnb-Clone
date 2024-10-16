const express = require('express');
const { addplaces, getAllplaces, getplaces, getplacesbyid } = require('@controllers/places.controller.js');

const router = express.Router();

router.post("/add-places", addplaces);
router.get("/get-all-places", getAllplaces);
router.get("/get-places", getplaces);
router.get("/get-places/:id", getplacesbyid);

module.exports = router;
