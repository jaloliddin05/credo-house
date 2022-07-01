const control_btn = document.querySelectorAll(".control_btn");
const overlay = document.querySelector(".overlay");

control_btn[0].classList.add("bg-warning");

for (let i = 0; i < control_btn.length; i++) {
  control_btn[i].addEventListener("click", () => {
    for (let i = 0; i < control_btn.length; i++) {
      control_btn[i].classList.remove("bg-warning");
    }
    control_btn[i].classList.add("bg-warning");
    if (i == 1) {
      overlay.style.top = "80px";
    } else {
      overlay.style.top = "420px";
    }
  });
}
