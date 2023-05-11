// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number String Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("prev");

// get indicators
let indicators = document.getElementById("indicators");

// set indicators childs
function setPaginations(num) {
  let list = document.createElement("ul");
  for (let i = 0; i < num; i++) {
    let listMember = document.createElement("li");
    listMember.innerHTML = `${i + 1}`;
    list.appendChild(listMember);
  }
  indicators.appendChild(list);
}
setPaginations(slidesCount);

// get list Members And Parent
let listParent = document.querySelector(".indicators ul");
let listMembers = document.querySelectorAll(".indicators ul li");

// on load
theChecker(currentSlide);

// Paginations Click
function indicatorsClick(arr) {
  arr.forEach((e) => {
    e.addEventListener("click", function (e) {
      currentSlide = [...listMembers].indexOf(this) + 1;
      theChecker(currentSlide);
    });
  });
}
indicatorsClick(listMembers);

// Handle Click On Previous and Next Button
nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

// Next Slide Function
function nextSlide() {
  if (currentSlide < slidesCount) {
    currentSlide++;
    theChecker(currentSlide);
  }
}

// Previous Slide Function
function previousSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker(currentSlide);
  }
}

// Show slide number function
function theChecker(num) {
  removeAcive(sliderImages);
  removeAcive(listMembers);
  num < 10
    ? (slideNumberElement.innerHTML = `Slide 0${num}`)
    : (slideNumberElement.innerHTML = `Slide ${num}`);
  sliderImages[num - 1].className = "active";
  listMembers[num - 1].className = "active";
  disablePrevious(currentSlide);
  disableNext(currentSlide);
}

// Disable Next and Previous Button Functions
function disableNext(num) {
  num === slidesCount
    ? nextButton.classList.add("disabled")
    : nextButton.classList.remove("disabled");
}
function disablePrevious(num) {
  num - 1 === 0
    ? previousButton.classList.add("disabled")
    : previousButton.classList.remove("disabled");
}

function removeAcive(arr) {
  arr.forEach((e) => e.classList.remove("active"));
}
