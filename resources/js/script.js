

/////////////////////////////////////////////////////////////////////
//Burger menu
function burgerMenu() {
  var dropdown = document.getElementById("burgerMenuDropdown");
  if (dropdown.className === "tabs") {
    dropdown.className += " showtabs";
  }

  else {
    dropdown.className = "tabs";
  }
}


/////////////////////////////////////////////////////////////////////
//Scroll up arrow, before footer
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/////////////////////////////////////////////////////////////////////
//PORTFOLIO PAGE
//PORTFOLIO WITH FILTERING
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active")
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target")

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }

  })
}

/////////////////////////////////////////////////////////////////////
//// END PORTFOLIO PAGE/////////////////////


