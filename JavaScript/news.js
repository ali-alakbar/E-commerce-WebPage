// ==================
// Start Activating Read More Buttons
// ==================

// Calling The Hidden Texts
let myHiddenTexts = Array.from(document.querySelectorAll(".box .info span"));

// Calling The Read More Buttons
let myReadMore = document.querySelectorAll(".box .info .read-more");
console.log(myReadMore);

// Iterates Through The Read More Button And When Click On It, Hidden File Will Be Visiable.
for (let i = 0; i < myReadMore.length; i++) {
  myReadMore[i].addEventListener("click", () => {
    myHiddenTexts[i].classList.toggle("active");
  });
}
// ==================
// End Activating Read More Buttons
// ==================
