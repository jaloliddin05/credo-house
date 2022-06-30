const admin = require("./model");

module.exports = {
  GET: async (req, res) => {
    res.render("admin");
  },
  POST: async (req, res) => {
    const { statistic } = req.body;

    if (statistic) {
      const company = await admin.getCompanyStatistics();
      const complex = await admin.getComplexStatistics();
      const room = await admin.getRoomStatistics();
      const bank = await admin.getBankStatistics();
      let a = {};
      a.company_name = company.map((e) => e.company_name);
      a.company_count = company.map((e) => +e.company_count);
      a.complex_name = complex.map((e) => e.complex_name);
      a.complex_count = complex.map((e) => +e.complex_count);
      a.room_count = room.map((e) => +e.room_count);
      a.room_number = room.map((e) => +e.room_number);
      a.bank_name = bank.map((e) => e.bank_name);
      a.bank_count = bank.map((e) => +e.bank_count);
      console.log(a);
      res.send(a);
    }
  },
};
