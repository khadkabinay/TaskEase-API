const mongoose = require("mongoose");


// SETS UP SCHEMA
const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a Task."] }, 
    date: {type: Date, required: true},
    iscompleted:{type: Boolean, default:false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
 },
  {
    timestamps: true, 

  }
);

// CREATES A MODEL 
const Task = mongoose.model("Task", taskSchema);



module.exports = Task;