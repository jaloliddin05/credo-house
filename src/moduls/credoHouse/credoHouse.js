const credo = require("./model");

module.exports = {
  GET: async (req, res) => {
    const allCompanies = await credo.getAllCompanies();

    res.render("home", { allCompanies });
  },
  POST: async (req, res) => {
    const { company_id, complex_id, room_id } = req.body;

    if (company_id) {
      const complexes = await credo.getComplexesOFCompany(company_id);

      res.send(complexes);
    } else if (complex_id) {
      const rooms = await credo.getRoomsOfComplexes(complex_id);

      res.send(rooms);
    } else if (room_id) {
      const [room] = await credo.getCurrentRoom(room_id);
      const price = room.total_area * room.kv_metr_price;
      console.log(price);
      const [bank] = await credo.getNearestBank(
        room.total_area,
        room.kv_metr_price
      );
      console.log(bank);
      const [complex] = await credo.getComplexByRoom(room.complex_id);
      let obj = {};
      obj.bank = bank;
      obj.room = room;
      obj.complex = complex;
      res.send(obj);
    }
  },
};
