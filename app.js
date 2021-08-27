const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
    } else if (styles.contains("increase")) {
      count++;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
