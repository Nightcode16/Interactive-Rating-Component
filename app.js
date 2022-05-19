const ratings = document.querySelectorAll(".rating");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const submit = document.querySelector("#submit");
let ratingCount = 0;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    if (rating.classList.contains("five")) {
      ratings.forEach((item) => {
        item.classList.add("ratings-style");
        ratingCount = 5;
      });
    } else if (rating.classList.contains("four")) {
      ratings.forEach((item) => {
        item.classList.add("ratings-style");
        ratingCount = 4;
      });
      five.classList.remove("ratings-style");
    } else if (rating.classList.contains("three")) {
      ratings.forEach((item) => {
        item.classList.add("ratings-style");
        ratingCount = 3;
      });
      five.classList.remove("ratings-style");
      four.classList.remove("ratings-style");
    } else if (rating.classList.contains("two")) {
      ratings.forEach((item) => {
        item.classList.remove("ratings-style");
        ratingCount = 2;
      });
      one.classList.add("ratings-style");
      two.classList.add("ratings-style");
    } else {
      ratings.forEach((item) => {
        item.classList.remove("ratings-style");
      });
      one.classList.add("ratings-style");
      ratingCount = 1;
    }
  });
});

submit.addEventListener("click", () => {
  const main = document.querySelector("main");
  const layer = document.querySelector(".layer");
  const ratingEl = document.querySelector(".rating-count");
  main.classList.add("remove-main");
  layer.classList.add("add-layer");
  ratingEl.textContent = `You selected ${ratingCount} out of 5`;
});
