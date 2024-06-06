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
      hideAllPopovers(); // Hide all first, in case one is already open
      popoverContents[index].style.display = "block";
      event.stopPropagation(); // Prevent the document click handler from firing
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
        // Scroll the next popover into view if it is not fully visible
        if (!isElementInViewport(nextPopover)) {
          nextPopover.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
      event.stopPropagation(); // Prevent the document click handler from firing
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
      }
      event.stopPropagation(); // Prevent the document click handler from firing
    });
  });

  // Hide popovers when clicking outside of them
  document.addEventListener("click", function () {
    hideAllPopovers();
  });

  // Automatically display the first popover on load
  // if (popoverContents.length > 0) {
  //   popoverContents[0].style.display = "block"; // Display the first popover
  // }

  function startTourFunction() {
    try {
      hideAllPopovers(); // Ensure all other popovers are hidden
      popoverContents[0].style.display = "block";
      console.log("Tour started: First popover displayed.");
    } catch (error) {
      console.error("Failed to start tour:", error);
    }
  }

  var startButton = document.getElementById("startTourButton");
  if (startButton) {
    startButton.addEventListener("click", function (event) {
      startTourFunction();
      event.stopPropagation(); // Prevent the document click handler from firing
      console.log("Start tour button clicked.");
    });
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
