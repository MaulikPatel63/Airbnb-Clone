import { Booking } from "../models/Booking.model.js";
import { User } from "../models/User.model.js";

export async function addbookings(req, res) {
  try {
    const { place, checkIn, checkOut, numberOfGuests, name, phone, price } =
      req.body;

    // Check for required fields
    if (
      !(
        place &&
        checkIn &&
        checkOut &&
        numberOfGuests &&
        name &&
        phone &&
        price
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    console.log("req.user:", req.user);

    // Find the user by their email
    const existingUser = await User.findOne({ email: req.user.email });

    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email does not exist" });
    }

    // Create a new booking
    const newBooking = new Booking({
      user: existingUser._id, // Ensure the correct field is used
      place,
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      price,
    });

    await newBooking.save();

    res.status(201).json({ success: true, message: "Booking added successfully" });
  } catch (error) {
    console.error("Error in Add Bookings controller:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}


export async function getbookings(req, res) {
  try {
    const userId = req.user.id; // Ensure the user ID is retrieved correctly

    const userBookings = await Booking.find({ user: userId }).populate('place'); // Fetch all bookings for the user

    if (!userBookings || userBookings.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No bookings found" });
    }

    res.status(200).json({ success: true, data: userBookings });
  } catch (error) {
    console.error("Error in Get Bookings controller:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
