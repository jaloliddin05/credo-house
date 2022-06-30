const express = require("express");
const router = express.Router();
const credo = require("./credoHouse/credoHouse");
const admin = require("./admin/admin");
const login = require("./login/LoginController");
const verifyToken = require("../middlwares/verifyToken");

router
  .get("/credoHouse", credo.GET)
  .post("/credoHouse", credo.POST)
  .get("/admin", verifyToken, admin.GET)
  .get("/login", login.GET)
  .post("/login", login.POST);

module.exports = {
  router,
};
