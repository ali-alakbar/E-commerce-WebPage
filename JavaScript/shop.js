// =================
// Start Activate Hidden Content
// =================

// Calling The Hidden Content
let hiddenContent = document.querySelectorAll(".accordions .hidden-content");
// Calling The List of Buttons
let myBtns = document.querySelectorAll(".accordions .other-content .mybtn");
for (let i = 0; i < myBtns.length; i++) {
  myBtns[i].addEventListener("click", () => {
    myBtns[i].classList.toggle("active");
    //Get the Hidden Content And Add Them To The Class 'active'
    hiddenContent[i].classList.toggle("active_two");
  });
}

// =================
// End Activate Hidden Content
// =================
