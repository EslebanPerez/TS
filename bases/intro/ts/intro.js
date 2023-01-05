"use strict";
console.log("Hola desde TS");
class Drink {
    constructor(name) {
        this.name = name;
    }
    info() {
        return this.name;
    }
}
const drink = new Drink('Agua');
console.log(drink.info());
// Herencia
class Beer extends Drink {
    constructor(name, alcohol, price) {
        super(name);
        this.price = price;
        this.alcohol = alcohol;
    }
    getPrice() {
        return "$" + this.price;
    }
    info() {
        return super.info() + ' ' + this.alcohol;
    }
}
//Implementación de interface
class Snack {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return "El precio es: $" + this.price;
    }
}
const productos = [
    new Beer("XX", 8.5, 48),
    new Snack("Papas", 40),
    new Beer("Victoria", 3.5, 20),
];
function getPrices(items) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}
getPrices(productos);
