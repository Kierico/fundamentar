/**
 * Outro método de evento via JS
 */

/** OBS: não é indicado este método, porque se fizer uma nova chamada, ele desconsidera a anterior. Só chama à ultima que encontrar.*/

/** O melhor é 'addEventListener', pois ele empilha as chamadas e executa. */

const h1 = document.querySelector("h1");
h1.onclick = print

function print() {
    console.log("print");
}

h1.onclick = function() {
    console.log("Outro momento");
}

// addEventListener
h1.addEventListener("click", print);

h1.addEventListener("click", function() {
    console.log("Outro momento");
});