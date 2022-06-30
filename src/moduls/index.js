const express = require("express");
const router = express.Router();
const credo = require("./credoHouse/credoHouse");

router.get("/credoHouse", credo.GET).post("/credoHouse", credo.POST);

module.exports = {
  router,
};
