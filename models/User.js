import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    agreeToTerms: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

const User = mongoose.models.User || mongoose.model("User", UsersSchema);
export default User;
