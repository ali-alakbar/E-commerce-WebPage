// ================== Start List Icon Effect ==================
// Calling the Icon That Will be Clicked
let icon = document.querySelector(".icon");
// List of Content that have 'display:none'
let hiddenList = document.getElementById("hidden-list");

icon.addEventListener("click", function () {
  hiddenList.classList.toggle("active");
});

// ================== End List Icon Effect ==================

// ================== Start Making A Soft Slider ==================

// Calling My Landing Titles As An Array And Set Its Length.
let myTitles = Array.from(document.querySelectorAll(".myList .list"));
let titleLength = myTitles.length;

// Set Up The Current Slid, Which Will Be Changing Later
let currentSlide = 1;

// Calling Next/Previous Buttons
let next = document
  .querySelector(".arrows .nextBtn")
  .addEventListener("click", () => {
    nextClick();
    check();
  });

let prev = document
  .querySelector(".arrows .prevBtn")
  .addEventListener("click", () => {
    prevClick();
    check();
  });

// ===================
// First Function
// ===================
function check() {
  remove();
  myTitles[currentSlide - 1].classList.add("active");
}
check();
// ===================
// Second Function
// ===================
function remove() {
  myTitles.forEach((title) => {
    title.classList.remove("active");
  });
}

// ===================
// Third Functions
// ===================
// Next
function nextClick() {
  if (currentSlide == titleLength) {
    currentSlide = 1;
    check();
  } else {
    currentSlide++;
    check();
  }
}
// Previous
function prevClick() {
  if (currentSlide == 1) {
    currentSlide = titleLength;
    check();
  } else {
    currentSlide--;
    check();
  }
}

// ===================
// Fourth Function
// ===================
// Automatically Changing Slides
setInterval(() => {
  if (currentSlide == titleLength) {
    currentSlide = 1;
    check();
  } else {
    currentSlide++;
    check();
  }
}, 4000);

let btnTwo = document.querySelector(".btns .btn-two");
setInterval(() => {
  btnTwo.classList.add("active");
}, 5000);

// ================== End Making A Soft Slider ==================
