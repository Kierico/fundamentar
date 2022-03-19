/**
 * nextSibling / nextElementSibling
 * previousSibling / previousElementSibling
 */

// nextSibling / nextElementSibling
const element = document.querySelector("header");
console.log(element.nextSibling);
console.log(element.nextElementSibling);

// previousSibling / previousElementSibling
const element2 = document.querySelector("body script");
console.log(element2.previousSibling);
console.log(element2.previousElementSibling);