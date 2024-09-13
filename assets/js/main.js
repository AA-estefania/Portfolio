const darkModeSwitch = document.getElementById("darkModeSwitch");
const slider = document.querySelector(".slider");

// Check localStorage for the dark mode state
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Apply the dark mode state on page load
if (isDarkMode) {
    document.body.classList.add("dark");
    darkModeSwitch.classList.add("dark");
    slider.style.transform = "translateX(30px)";
}

// Add an event listener to the dark mode switch
darkModeSwitch.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // Toggle the dark mode state
    document.body.classList.toggle("dark");
    darkModeSwitch.classList.toggle("dark");
    slider.style.transform = isDarkMode ? "translateX(30px)" : "translateX(0)";

    // Save the dark mode state in localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
});

function loadHeaderAndFooter() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');
  
    fetch('pages/header.html')
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data;
        });
  
    fetch('pages/footer.html')
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
        });
  }
  
  

   /* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Designer", "Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 100,
    backDelay : 2000
  })

  

AOS.init({
    duration: 800, // Duration of the animation in milliseconds
    easing: 'ease-in-out', // Easing function
    
});

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const carouselWrapper = document.querySelector('.carousel-wrapper');

    let scrollAmount = 0;
    const itemWidth = 320; // Width of carousel-item (300px + 2 * 10px margin)

    rightArrow.addEventListener('click', function () {
        carouselWrapper.scrollTo({
            top: 0,
            left: (scrollAmount += itemWidth),
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener('click', function () {
        carouselWrapper.scrollTo({
            top: 0,
            left: (scrollAmount -= itemWidth),
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    var popupMenu = document.getElementById('popupMenu');
    if (popupMenu.style.display === "block") {
        popupMenu.style.display = "none";
    } else {
        popupMenu.style.display = "block";
    }
}