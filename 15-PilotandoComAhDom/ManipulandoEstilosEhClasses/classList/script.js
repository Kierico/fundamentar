/**
 * classList
 */

const element = document.querySelector("body");
element.classList.add("active", "green");

element.classList.remove("active");

element.classList.toggle("active"); // on/off;

console.log(element.classList);