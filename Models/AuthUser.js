const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

authUserSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret["password"];
    return ret;
  },
});

const AuthUser = mongoose.model("AuthUser", authUserSchema);

module.exports = AuthUser
