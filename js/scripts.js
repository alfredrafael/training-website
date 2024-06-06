/*!
 * Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
  var popoverContainers = document.querySelectorAll(".popover-container");
  var popoverContents = document.querySelectorAll(".popover-content");
  var nextButtons = document.querySelectorAll(".next");
  var previousButtons = document.querySelectorAll(".previous");

  // Function to hide all popovers
  function hideAllPopovers() {
    popoverContents.forEach(function (content) {
      content.style.display = "none";
    });
  }

  // Setup event listeners for each popover container
  popoverContainers.forEach((container, index) => {
    var trigger = container.querySelector(".popover-trigger");
    trigger.addEventListener("click", function (event) {
      hideAllPopovers();
      popoverContents[index].style.display = "block";
      event.stopPropagation();
    });
  });

  // Navigate to the next popover
  nextButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      var currentPopover = popoverContents[index];
      var nextPopover = popoverContents[index + 1];
      if (nextPopover) {
        currentPopover.style.display = "none";
        nextPopover.style.display = "block";
        if (!isElementInViewport(nextPopover)) {
          nextPopover.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
      event.stopPropagation();
    });
  });

  // Navigate to the previous popover
  previousButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      var currentPopover = popoverContents[index];
      var previousPopover = popoverContents[index - 1];
      if (previousPopover) {
        currentPopover.style.display = "none";
        previousPopover.style.display = "block";
        if (!isElementInViewport(previousPopover)) {
          previousPopover.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }
      event.stopPropagation();
    });
  });

  // Hide popovers when clicking outside of them
  document.addEventListener("click", function () {
    hideAllPopovers();
  });

  // Automatically display the first popover on load
  if (popoverContents.length > 0) {
    popoverContents[0].style.display = "block";
  }
});

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// CAROUSEL
const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

// CUSTOM POPOVER
