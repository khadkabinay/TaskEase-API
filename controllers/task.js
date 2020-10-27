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


module.exports = {
    index,
  
};