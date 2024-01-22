const body = document.querySelector("body");
const button = document.querySelector(".click_1");
const button2 = document.querySelector(".click_2");

button.addEventListener("click", function () {
  body.style.background = "#000";
  button.style = "display: none;";
  button2.classList.remove("none");
});
button2.addEventListener("click", function () {
  body.style.background = "#fff";
  button.style = "display: block;";
  button.classList.add("bleck");
  button2.classList.add("none");
});