const admin_bank = require("./model");

module.exports = {
  GET: async (req, res) => {
    const bank = await admin_bank.getBanks();
    res.render("admin_bank", { bank });
  },
  POST: async (req, res) => {
    const {
      bank_id,
      bank_name,
      pay_procent,
      bank_img,
      bank_money,
      credit_year,
    } = req.body;

    if (bank_id) {
      const deletedBank = await admin_bank.deleteBanks(bank_id);
      res.redirect("/admin_bank");
    } else if (bank_name && pay_procent) {
      const newBank = await admin_bank.addBank(
        bank_name,
        pay_procent,
        bank_img,
        bank_money,
        credit_year.split(",").map((e) => +e)
      );
      res.redirect("/admin_bank");
    }
  },
};
