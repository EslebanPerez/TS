console.log("Singleton");
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.random = Math.random();
    }
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
console.log(singleton.random);
console.log(singleton2.random);
singleton.random = 7;
console.log(singleton.random);
console.log(singleton2.random);
