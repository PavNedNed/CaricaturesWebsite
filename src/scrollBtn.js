// Get the button:
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
export function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
}

console.log("SCROLL LOADED")