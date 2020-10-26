/* External mudules */
const express = require('express');
const db = require('../models');



// Index Route
const index = async (req, res) => {
    try{
        const foundUser = await db.User.find({});
        res.status(200).json({ status: 200, data: foundUser });
      
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





