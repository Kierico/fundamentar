/**
 * insertBefore
 */

const div = document.createElement("div");
div.innerText = "Olá Devs!"

/** insertBefore */
const body = document.querySelector("body");
const header = body.querySelector("header");
body.insertBefore(div, header);

/** inserindo depois: insertAfter - mas, 'insertAfter' não existe! */
const body2 = document.querySelector("body");
const header2 = body2.querySelector("header");
// body.insertBefore(div, header2.nextElementSibling);