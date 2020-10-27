const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


router.get("/", ctrl.task.index);
router.get("/:id", ctrl.task.show);


module.exports = router;