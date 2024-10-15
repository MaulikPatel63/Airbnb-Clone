import { Place } from "../models/Place.model.js";
import { User } from "../models/User.model.js";

export async function addplaces(req, res) {
  try {
    const {
      title,
      address,
      addedPhotos = [],
      description,
      price,
      perks,
      extraInfo = "",
      checkIn,
      checkOut,
      maxGuests,
    } = req.body;

    // Check for required fields
    if (
      !title || 
      !address || 
      !description || 
      !price || 
      !perks || 
      !checkIn || 
      !checkOut || 
      !maxGuests
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All required fields must be provided" });
    }

    console.log("req.user:", req.user);

    // Check if user exists
    const existingUser = await User.findOne({ email: req.user.email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create new place
    const newPlace = new Place({
      owner: existingUser._id,
      title,
      address,
      photos: addedPhotos,
      description,
      price,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });

    await newPlace.save();

    res.status(201).json({
      success: true,
      message: "Place added successfully",
      data: newPlace,
    });
  } catch (error) {
    console.error("Error in Add Places controller:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getAllplaces(req, res) {
  try {
    const allPlaces = await Place.find();

    if (allPlaces.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No places found",
      });
    }

    res.status(200).json({
      success: true,
      data: allPlaces,
    });
  } catch (error) {
    console.error("Error in Get All Places controller:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getplaces(req, res) {
  try {
    const userPlaces = await Place.find({ owner: req.user.id });

    if (userPlaces.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No places found for this user",
      });
    }

    res.status(200).json({
      success: true,
      data: userPlaces,
    });
  } catch (error) {
    console.error("Error in Get User's Places controller:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getplacesbyid(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
      });
    }

    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    console.error("Error in Get Place by ID controller:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
