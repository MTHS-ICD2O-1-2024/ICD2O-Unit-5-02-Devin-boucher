// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function checkNumber () {
  // declaring variable
  let number
  // Get input values
  const isPositive = document.getElementById('option-positive').checked

  if (isPositive) {
    number = Math.floor(Math.random() * 6) + 1
  } else {
    number = -1 * (Math.floor(Math.random() * 6) + 1)
  }

  document.getElementById('result').innerHTML = `<p>Your number is: <strong>${number}</strong></p>`
}
