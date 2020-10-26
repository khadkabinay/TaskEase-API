/* External mudules */
const express = require('express');
const db = require('../models');



// INDEX ROUTE
const index = async (req, res) => {
    try{
        const foundUsers = await db.User.find({});
        res.status(200).json({ status: 200, data: foundUsers });
      
    }catch (err) {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong. Please try again",
        });
      }
   
}


// SHOW ROUTE

const show = async (req, res) => {
     try{
         foundUser = await db.User.findById(req.params.id)
         if(!foundUser){
         res.status(200).json({ "message": "No User with that id found in db" });
        }else{
        res.status(200).json({  status: 200, user : foundUser });

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





