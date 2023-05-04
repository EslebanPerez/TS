"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, ...restArg) => {
        return `${firstName} ${restArg.join(" ")}`;
    };
    const superman = fullName("Clark");
    const superman2 = fullName("Clark", "Joseph");
    const superman3 = fullName("Clark", "Joseph", "Kent");
    const superman4 = fullName("Clark", "Joseph", "Kent", "Superman");
    console.log({ superman });
    console.log({ superman2 });
    console.log({ superman3 });
    console.log({ superman4 });
})();
(() => {
    const fullName = (firstName, lastname, upper = true) => {
        if (upper) {
            return `${firstName} ${lastname || '---'}`.toLocaleUpperCase();
        }
        else {
            return `${firstName} ${lastname || '---'}`;
        }
    };
    const name = fullName("Steve", "Rogers", false);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "-"}`;
    };
    const name = fullName("Steve");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Steve", "Rogers");
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const SaveTheWorld = () => `El mundo esta a salvo`;
    let myFunction;
    myFunction = greet;
    console.log(myFunction("Evan"));
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatiSignal());
    const heroName = returnName();
    console.log(heroName);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar por el tiempo']
    };
    let Superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Super Fuerza']
    };
})();
(() => {
    const batimovil = {
        modelo: "6x6",
        carroceria: "Negra",
        pasajeros: 4,
        antibalas: true,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar por el tiempo']
    };
    let Superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Super Fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Evan';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Evan',
        age: 26,
        powers: [1, 2]
    };
    console.log(typeof myCustomVariable);
})();
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
console.log("Singleton");
class Singleton {
    constructor() {
        this.random = Math.random();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton.random);
console.log(singleton2.random);
singleton.random = 7;
console.log(singleton.random);
console.log(singleton2.random);
//# sourceMappingURL=main.js.map