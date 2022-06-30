const select_company = document.querySelector(".select_company");
const select_complex = document.querySelector(".select_complex");
const select_rooms = document.querySelector(".select_rooms");
const select_year = document.querySelector(".select_year");
const div_1 = document.querySelector(".div_1");
const company_img = document.querySelector(".company_img");
const company_name = document.querySelector(".company_name");
const div_1_2 = document.querySelector(".div_1_2");
const complex_name = document.querySelector(".complex_name");
const rooms_count = document.querySelector(".rooms_count");
const kv_metr_price = document.querySelector(".kv_metr_price");
const total_area = document.querySelector(".total_area");
const complex_adress = document.querySelector(".complex_adress");
const div_2 = document.querySelector(".div_2");
const bank_img = document.querySelector(".bank_img");
const bank_name = document.querySelector(".bank_name");
const bank_money = document.querySelector(".bank_money");
const mortgage_duration = document.querySelector(".mortgage_duration");
const starting_payment = document.querySelector(".starting_payment");
const time = document.querySelector(".time");
const div_3 = document.querySelector(".div_3");
const house_price = document.querySelector(".house_price");
const starting_payments = document.querySelector(".starting_payments");
const monthly_payment = document.querySelector(".monthly_payment");
const bank_service = document.querySelector(".bank_service");
const payment_duration = document.querySelector(".payment_duration");
const box = document.querySelector(".box");

//....................
const renderComplexes = (arr, place) => {
  place.innerHTML = null;
  let option1 = document.createElement("option");
  option1.value = "no";
  option1.textContent = "Choose";
  place.appendChild(option1);
  arr.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.complex_id;
    option.textContent = e.complex_name;
    place.appendChild(option);
  });
};

const renderRooms = (arr, place) => {
  place.innerHTML = null;
  let option1 = document.createElement("option");
  option1.value = "no";
  option1.textContent = "Choose";
  place.appendChild(option1);
  arr.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.room_id;
    option.textContent = e.room_count;
    place.appendChild(option);
  });
};

const renderYears = (obj, place) => {
  place.innerHTML = null;
  let option1 = document.createElement("option");
  option1.value = "no";
  option1.textContent = "Choose";
  place.appendChild(option1);
  obj.credit_year.forEach((e) => {
    const option = document.createElement("option");
    option.value = obj.bank_id + "&" + e;
    option.textContent = e;
    place.appendChild(option);
  });
};

select_company.addEventListener("change", () => {
  if (select_complex.value != "no") {
    select_complex.innerHTML = null;
  }
  if (select_rooms.value != "no") {
    div_1_2.classList.add("d-none");
    select_rooms.innerHTML = null;
  }
  if (select_year.value != "no") {
    div_2.classList.add("d-none");
    div_3.classList.add("d-none");
    select_year.innerHTML = null;
  }

  let company_id = select_company.value.split("*")[0];
  if (company_id != "no") {
    fetch("http://localhost:9000/credoHouse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        renderComplexes(data, select_complex);
        div_1.classList.remove("d-none");
        box.classList.remove("d-none");

        company_img.setAttribute("src", select_company.value.split("*")[1]);
        company_name.textContent = select_company.value.split("*")[2];
      });
  }
});

select_complex.addEventListener("change", () => {
  if (select_rooms.value != "no") {
    div_1_2.classList.add("d-none");
    select_rooms.innerHTML = null;
  }
  if (select_year.value != "no") {
    div_2.classList.add("d-none");
    div_3.classList.add("d-none");
    select_year.innerHTML = null;
  }

  let complex_id = select_complex.value;
  if (complex_id != "no") {
    fetch("http://localhost:9000/credoHouse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complex_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => renderRooms(data, select_rooms));
  }
});

select_rooms.addEventListener("change", () => {
  if (select_year.value != "no") {
    div_2.classList.add("d-none");
    div_3.classList.add("d-none");
    select_year.innerHTML = null;
  }
  let room_id = select_rooms.value;
  if (room_id != "no") {
    fetch("http://localhost:9000/credoHouse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        renderYears(data.bank, select_year);
        div_1_2.classList.remove("d-none");
        complex_name.textContent = data.complex.complex_name;
        rooms_count.textContent = data.room.room_count + " rooms";
        kv_metr_price.textContent = data.room.kv_metr_price + " meter square";
        total_area.textContent = data.room.total_area + " meter square";
        complex_adress.textContent = data.complex.complex_adress;
      });
  }
});

select_year.addEventListener("change", () => {
  let bank_id = select_year.value.split("&")[0];
  if (bank_id != "no") {
    fetch("http://localhost:9000/credoHouse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bank_id,
        bank_year: select_year.value.split("&")[1],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        div_2.classList.remove("d-none");
        bank_img.setAttribute("src", data.bank_img);
        bank_name.textContent = data.bank_name;
        bank_money.textContent = data.bank_money + " upto";
        mortgage_duration.textContent = "Mortage duration: " + data.year;
        starting_payment.textContent =
          "Starting payment: " + data.starting_payment_procent + "%";
        time.textContent = data.year + "year";
        div_3.classList.remove("d-none");
        house_price.textContent = "House price: " + data.house_price;
        starting_payments.textContent =
          "Starting payment: " + data.starting_payment;
        monthly_payment.textContent =
          "Monthly payment: " + data.monthly_payment;
        bank_service.textContent = "Bank service: " + data.service;
        payment_duration.textContent =
          "Payment duration: " + data.year + " year";
      });
  }
});
