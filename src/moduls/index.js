const express = require("express");
const router = express.Router();
const credo = require("./credoHouse/credoHouse");
const admin = require("./admin/admin");
const login = require("./login/LoginController");
const verifyToken = require("../middlwares/verifyToken");
const admin_company = require("./admin_company/admin_company");

router
  .get("/credoHouse", credo.GET)
  .post("/credoHouse", credo.POST)
  .get("/admin", verifyToken, admin.GET)
  .get("/login", login.GET)
  .post("/login", login.POST)
  .post("/admin", admin.POST)
  .get("/admin_company", admin_company.GET)
  .post("/admin_company", admin_company.POST);

module.exports = {
  router,
};
