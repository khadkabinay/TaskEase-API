const db = require("../models");

const show = async (req, res) => {
  try {
    const authUserFound = await db.AuthUser.findById(req.userId);
    res.status(200).json({ status: 200, data: authUserFound });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  show,
};