const express = require("express");
const router = express.Router();
const credo = require("./credoHouse/credoHouse");
const admin = require("./admin/admin");
const login = require("./login/LoginController");
const verifyToken = require("../middlwares/verifyToken");
const admin_company = require("./admin_company/admin_company");
const admin_complex = require("./admin_complex/admin_complex");
const admin_room = require("./admin_room/admin_room");
const admin_bank = require("./admin_bank/admin_bank");

router
  .get("/credoHouse", credo.GET)
  .post("/credoHouse", credo.POST)
  .get("/admin", verifyToken, admin.GET)
  .get("/login", login.GET)
  .post("/login", login.POST)
  .post("/admin", admin.POST)
  .get("/admin_company", admin_company.GET)
  .post("/admin_company", admin_company.POST)
  .get("/admin_complex", admin_complex.GET)
  .post("/admin_complex", admin_complex.POST)
  .get("/admin_room", admin_room.GET)
  .post("/admin_room", admin_room.POST)
  .get("/admin_bank", admin_bank.GET)
  .post("/admin_bank", admin_bank.POST);

module.exports = {
  router,
};
