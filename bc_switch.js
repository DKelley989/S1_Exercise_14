"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Dylan Kelley
   Date:   3.28.19

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/

// Generate an outline based on h1 through h6 headings in the source document
window.addEventListener('load', makeOutline);

function makeOutline() {
    // Location of the outline
    var outline = document.getElementById("outline");

    var source = document.getElementById("doc");
}