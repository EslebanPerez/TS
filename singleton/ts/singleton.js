"use strict";
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
//# sourceMappingURL=singleton.js.map