const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");

// POST Register Route
const register = async (req, res) => {
  try {
    const foundAuthUser = await db.AuthUser.findOne({ email: req.body.email });

    if (foundAuthUser) {
      return res.send({ message: "Account is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    // takes each character and turns it into multiple random characters
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    // create user with req.body and hashed password
    const createdUser = await db.AuthUser.create({ ...req.body, password: hash });

    return res
      .status(201)
      .json({ status: 201, message: "success", createdUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};






// POST Login Route
const login = async (req, res) => {
    try {
      const foundAuthUser = await await db.AuthUser.findOne({ email: req.body.email });
  
      if (!foundAuthUser) {
        return res.send({ message: "Email or Password incorrect" });
      }
  
      const match = await bcrypt.compare(req.body.password, foundAuthUser.password);
  
      if (!match) {
        return res.send({ message: "Email or Password incorrect" });
      }
  
      if (match) {
        // create a json web token
        const signedJwt = await jwt.sign(
          {
            _id: foundAuthUser._id,
          },
          "super_secret_key",
          {
        
            expiresIn: "1h",
          }
        );
  
        return res.status(200).json({
          status: 200,
          message: "Success",
          id: foundAuthUser._id,
          signedJwt,
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Username or password is incorrect",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
      });
    }
  };
  











module.exports = {
    register,
   
  };