/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
const menuBtn = document.querySelector(".dropbtn");
let menuOpen = false;

function myFunction() {
  if (menuOpen == false) {
    document.getElementById("myDropdown").classList.toggle("show");
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    document.getElementById("myDropdown").classList.toggle("show");
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn-burger") &&
    !event.target.matches(".dropbtn")
  ) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    menuBtn.classList.remove("open");
    menuOpen = false;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


