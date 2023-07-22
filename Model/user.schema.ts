import mongoose, { Schema } from "mongoose";
import { UserTypes } from "../@types/user.types";

const UserSchema = new Schema({
  userName: { type: String, required: [true, "A user must have a name"] },
  companyName: {
    type: String,
    required: function () {
      return this.role === "seller";
    },
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
  },
  password: { type: String, required: [true, "A user must have a password"] },
  mobileNumber: {
    type: String,
    required: [true, "A user must have a contact number"],
  },
  role: { type: String, enum: ["buyer", "seller"] },
});

export const UserModel =
  mongoose.models.user || mongoose.model<UserTypes>("user", UserSchema);
