/* External mudules */
const express = require('express');
const db = require('../models');



// INDEX ROUTE
const index = async (req, res) => {
    try{
        const foundUsers = await db.User.find({});
        res.status(200).json({ status: 200, "users": foundUsers });
      
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
       const foundUser = await db.User.findById(req.params.id)
         if(!foundUser){
         res.status(200).json({ "message": "No User found with id " });
        }else{
        res.status(200).json({  status: 200, "user" : foundUser });

        }

             
     }catch(err){
         return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
          });
     }

};




// CREATE ROUTE
const create = async (req, res) => {
    try {
      const  userCreated = await db.User.create(req.body);
        res.status(201).json({ user : userCreated });

    }catch(err){
        return res.status(500).json({
          status: 500,
          message: "Something went wrong. Please try again",
        });
      }
};









module.exports = {
     index,
     show,
     create
  };





