const credo = require("./model");
let lastRoomId;
module.exports = {
  GET: async (req, res) => {
    const allCompanies = await credo.getAllCompanies();
    res.render("home", { allCompanies });
  },
  POST: async (req, res) => {
    const { company_id, complex_id, room_id, bank_id, bank_year } = req.body;

    if (company_id) {
      const complexes = await credo.getComplexesOFCompany(company_id);

      res.send(complexes);
    } else if (complex_id) {
      const rooms = await credo.getRoomsOfComplexes(complex_id);

      res.send(rooms);
    } else if (room_id) {
      lastRoomId = room_id;
      console.log(lastRoomId);
      const [room] = await credo.getCurrentRoom(room_id);
      const [bank] = await credo.getNearestBank(
        room.total_area,
        room.kv_metr_price
      );
      const [complex] = await credo.getComplexByRoom(room.complex_id);
      let obj = {};
      obj.bank = bank;
      obj.room = room;
      obj.complex = complex;
      res.send(obj);
    } else if (bank_id) {
      const [bank] = await credo.getBankById(bank_id);
      const [payment] = await credo.getRoomById(
        bank.starting_payment_procent,
        bank_year,
        lastRoomId
      );
      bank.starting_payment = payment.starting_payment;
      bank.monthly_payment = payment.monthly_payment;
      bank.year = bank_year;
      bank.service = "2.5 million";
      bank.house_price = payment.house_price;
      res.send(bank);
    }
  },
};
