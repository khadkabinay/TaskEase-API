const mongoose = require("mongoose");


// SETS UP SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a name."] },
    username: {type: String, required: true, unique: true},
    email: {type: String, required:[true, "You must provide an email."] },
    image: {type: String, required:[true, "You must provide a email."] },
    password: {type: String, required: true},
    phoneNumber: {type: Number, required:[true, "You must provide a phone number."] },
    role : String,
    
    // REFERENCE TO TASKS
    Tasks: [ { type: mongoose.Schema.Types.ObjectId, ref: "Task" } ]
 },
  {
    timestamps: true, 

  }
);

// CREATES A MODEL 
const User = mongoose.model("User", userSchema);



module.exports = User;