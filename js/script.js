// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-04-JS/sw.js", {
    scope: "/ICS20-5-04-JS/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  mon = document.getElementById("monday").checked
  tue = document.getElementById("tuesday").checked
  wed = document.getElementById("wednesday").checked
  thur = document.getElementById("thursday").checked
  fri = document.getElementById("friday").checked
  sat = document.getElementById("saturday").checked
  sun = document.getElementById("sunday").checked
  const age = parseInt(document.getElementById("age").value)

  if (thurs == true || tues == true || (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML =
      "<p>Youre eligible for a discount!</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>regular pricing</p>"
  }
}
