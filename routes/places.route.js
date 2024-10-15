import express from 'express';
import { addplaces, getAllplaces, getplaces, getplacesbyid } from '../controllers/places.controller.js';

const router = express.Router();

router.post("/add-places", addplaces);
router.get("/get-all-places", getAllplaces);
router.get("/get-places", getplaces);
router.get("/get-places/:id", getplacesbyid);

export default router;
