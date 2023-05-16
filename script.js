const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

arrowRight.addEventListener("click", function () {
  slide1.style.left = "-50%";
  slide2.style.left = "50%";
});

arrowLeft.addEventListener("click", function () {
  if ((slide1.style.left = "-50%")) {
    slide1.style.left = "50%";
  }
  if ((slide2.style.left = "50%")) {
    slide2.style.left = "150%";
  }
});

//arrows press
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    arrowLeft.click();
  }
  if (e.key === "ArrowRight") {
    arrowRight.click();
  }
});
