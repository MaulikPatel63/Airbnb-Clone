import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  perks: {
    type: String,
    required: true,
  },
  extraInfo: {
    type: String,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
  maxGuests: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Place =
  mongoose.models.Place || mongoose.model("Place", placeSchema);
  export default Place