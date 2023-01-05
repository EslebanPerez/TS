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
const beer = new Beer("XX", 8.5, 48);
console.log(beer.info());
const papitas = new Snack("papas", 40);
console.log(papitas.name);
console.log(papitas.getPrice());
