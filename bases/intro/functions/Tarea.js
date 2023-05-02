"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parámetros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo función
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de función que acepte la función "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
