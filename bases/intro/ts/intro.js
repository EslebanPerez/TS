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
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }
    info() {
        return super.info() + ' ' + this.alcohol;
    }
}
const beer = new Beer("XX", 8.5);
console.log(beer.info());
