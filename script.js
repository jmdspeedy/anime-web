// listen for the scroll event on the window
window.addEventListener("wheel", function (event) {
  // check if the user has scrolled past a certain point
  if (event.deltaY > 0 && window.pageYOffset < 15) {
    event.preventDefault(); // Prevent default scroll behavior
    document.querySelector("#scroll-to").scrollIntoView({ behavior: "smooth", passive: false }); // Scroll to desired section smoothly
  }
}, { passive: false });


window.addEventListener("keydown", function (event) {
  if (event.keyCode === 40 && window.pageYOffset < 15) {
    // Check if down arrow key was pressed
    event.preventDefault(); // Prevent default scroll behavior
    document.querySelector("#scroll-to").scrollIntoView({ behavior: "smooth" }); // Scroll to desired section smoothly
  }
});

// Get the button:
let mybutton = document.getElementsByClassName("top-button");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 10) {
    mybutton[0].classList.add('button-hidden')
  } else if (prevScrollpos > currentScrollPos) {
    mybutton[0].classList.remove('button-hidden')
  } else {
    mybutton[0].classList.add('button-hidden')
  }
  prevScrollpos = currentScrollPos;
});

let header = document.getElementsByClassName("header")

window.addEventListener('scroll', function() {
  console.log(this.window.pageYOffset)
  if (window.pageYOffset > 727) {
    header[0].classList.add('header-hidden');
  } else {
    header[0].classList.remove('header-hidden');
  }
});
