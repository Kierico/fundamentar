/**
 * Atributos
 */

/** adiciona */
const header = document.querySelector("header");
header.setAttribute("id", "header");

/** pesquisa */
const headerID = document.querySelector("#header");
console.log(headerID);

/** pegar */
console.log(headerID.getAttribute("id"));
console.log(headerID.getAttribute("class"));

/** remove */
header.removeAttribute("id");