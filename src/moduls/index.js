const express = require("express");
const router = express.Router();
const credo = require("./credoHouse/credoHouse");
const admin = require("./admin/admin");
const login = require("./login/LoginController");
const verifyToken = require("../middlwares/verifyToken");
const admin_company = require("./admin_company/admin_company");
const admin_complex = require("./admin_complex/admin_complex");

router
  .get("/credoHouse", credo.GET)
  .post("/credoHouse", credo.POST)
  .get("/admin", verifyToken, admin.GET)
  .get("/login", login.GET)
  .post("/login", login.POST)
  .post("/admin", admin.POST)
  .get("/admin_company", admin_company.GET)
  .post("/admin_company", admin_company.POST)
  .get("/admin_complex", admin_complex.GET);

module.exports = {
  router,
};
