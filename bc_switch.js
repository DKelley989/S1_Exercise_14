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

    // Source document for the outline
    var source = document.getElementById("doc");

    var mainHeading = document.createElement("h1");
    var outlineList = document.createElement("ol");
    var headingText = document.createTextNode("Outline");

    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);

    createList(source, outlineList);
}

function createList(source, outlineList) {
    // Headings for the outline
    var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
    // Previous level of the headings
    var prevLevel = 0;
    // Loop through all of the child nodes of source article until no child nodes are left
    for (var n = source.firstChild; n !== null; n = n.nextSibling) {
        var headLevel = headings.indexOf(n.nodeName);
        if (headLevel !== -1) {
            var listElem = document.createElement("li");
            listElem.innerHTML = n.firstChild.nodeValue;
            if (headLevel === prevLevel) {
                // append the list item to the current list
                outlineList.appendChild(listElem);
            } else if (headLevel > prevLevel) {
                // start a new nested list
                var nestedList = document.createElement("ol");
                nestedList.appendChild(listElem);
                // Append nested list to the last item in the current list
                outlineList.lastChild.appendChild(nestedList);
                // Change the current list to the nested list
                outlineList = nestedList;
            } else {
                // append the list item to a higher list
            }
            // Update the value of prevLevel
            prevLevel = headLevel;
        }
    }
}