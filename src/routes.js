const express = require("express");
const router = express.Router();
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");

router.get("/home", (req, res) => res.render("index", { page: "create-room" }));
router.get("/create-pass", (req, res) => res.render("index", { page: "create-pass" }));

router.post("/create-room", roomController.create);
router.get("/room/:room", roomController.open);
router.post("/enterrom", roomController.enter);

router.post("/question/create/:room", questionController.create);
router.post("/question/:room/:question/:action", questionController.index);

module.exports = router;
