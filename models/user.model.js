import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  favorite: {
    type: Array,
    default: []
}
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
