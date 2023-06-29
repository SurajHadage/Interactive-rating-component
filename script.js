const content1 = document.querySelector(".content-1");
const content2 = document.querySelector(".content-2");
const selection = document.querySelectorAll(".score");
const submitbtn = document.querySelector("#submit");
const selectedRate = document.querySelector("#selected");
let rate = 0;
selection.forEach((num) => {
  num.addEventListener("click", function () {
    rate = this.innerHTML;
  });
});
submitbtn.addEventListener("click", rateHandler);
function rateHandler() {
  if (rate == 0) {
    alert("Please rate us");
  } else {
    selectedRate.innerHTML = rate;
    content1.classList.add("hidden");
    content2.style.display = "flex";
  }
}
