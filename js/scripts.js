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
    // Find clickable trigger within the container
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
});

// prev
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
});

const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

// CUSTOM POPOVER
