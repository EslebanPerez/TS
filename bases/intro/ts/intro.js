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
