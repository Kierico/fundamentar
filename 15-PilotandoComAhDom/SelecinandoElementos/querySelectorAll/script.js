/**
 * querySelectorAll
 */

const elements = document.querySelectorAll(".one");

// console.log(elements);

elements.forEach(el => console.log(el));

// obs: Só dá pra fazer um forEach em 'NodeList', já no 'HTML Colection' não se consegui fazer um forEach.