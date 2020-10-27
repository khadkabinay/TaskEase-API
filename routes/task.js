const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


router.get("/", ctrl.task.index);
router.post("/", ctrl.task.create);
router.get("/:id", ctrl.task.show);
router.put("/:id", ctrl.task.update);


module.exports = router;