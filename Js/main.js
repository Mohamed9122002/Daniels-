const progress = document.getElementById("about");
const allProgress = document.querySelectorAll(".progress_increment");
const skills_progress = document.querySelectorAll(".skills-progress span ");
const counterNumbers = document.querySelectorAll(".numbers_four .counter");
// console.log(counterNumbers);
const numbersCounter = document.querySelector(".numbers_four");
// console.log(numbersCounter);
const scroll_ToTop = document.querySelector(".scroll-to-top");

const allImages = Array.from(document.querySelectorAll("img.nav-tabs-img-all"));
console.log(allImages.length);
const designImages = Array.from(
  document.querySelectorAll("img.nav-tabs-img-design")
);
console.log(designImages.length);
const brandsImage = Array.from(
  document.querySelectorAll("img.nav-tabs-img-brands")
);
console.log(brandsImage.length);
const layerPopup = document.querySelector(".layerPopup");
const imageContent = document.querySelector(".imageContent");
const closeBtn = document.querySelector(".fa-xmark");
const nextElementLeft = document.querySelector(".fa-arrow-left");
const nextElementRight = document.querySelector(".fa-arrow-right");
let indexOfClickedImage;
// progress increment
function scrollProgress() {
  if (window.scrollY >= progress.offsetTop - 200) {
    // console.log("Mohamed");
    for (let i = 0; i < allProgress.length; i++) {
      allProgress[i].style.width = allProgress[i].dataset.width;
      for (let j = 0; j < skills_progress.length; j++) {
        skills_progress[j].classList.remove("main-color");
      }
    }
  }
}
// function is counter incremented
function startedCounter(e) {
  // console.log(e.dataset.counter);
  let count = setInterval(function() {
    e.innerHTML++;
    if (e.dataset.counter == e.innerHTML) {
      clearInterval(count);
    }
  }, 2000 / e.dataset.counter);
}
let stated = false;

// startedCounter(counterNumbers[2])
function scrollCounter() {
  if (window.scrollY > numbersCounter.offsetTop - 400) {
    // console.log("Hello world!");
    if (!stated) {
      for (var i = 0; i < counterNumbers.length; i++) {
        startedCounter(counterNumbers[i]);
      }
    }
    stated = true;
  }
}

function scrollToTop() {
  if (window.scrollY >= 1000) {
    scroll_ToTop.classList.remove("d-none");
  } else {
    scroll_ToTop.classList.add("d-none");
  }
}
window.onscroll = function() {
  // progress increment
  scrollProgress();
  scrollCounter();
  // process increment
  scrollToTop();
};

scroll_ToTop.addEventListener("click", function() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
