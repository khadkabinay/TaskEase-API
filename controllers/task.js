/* External mudules */
const express = require('express');
const db = require('../models');




// INDEX ROUTE FOR TASK
const index = async (req, res) => {
    try{
        const foundTasks = await db.Task.find({});
        res.status(200).json({ status: 200, "tasks": foundTasks });
      
    }catch (err) {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong. Please try again",
        });
    }
 
}


// SHOW ROUTE FOR TASKS
const show = async (req, res) => {
    try{
      const foundTask = await db.Task.findById(req.params.id)
           if(!foundTask){
               res.status(200).json({ "message": "No Task found with id " });
           }else{
               res.status(200).json({  status: 200, "task" : foundTask });
         }

       }catch(err){
           return res.status(500).json({
               status: 500,
               message: "Something went wrong. Please try again",
         });
    }

};


module.exports = {
    index,
    show
  
};