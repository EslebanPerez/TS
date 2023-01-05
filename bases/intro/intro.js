// Clases
class Drink{
  constructor(name){
    this.name = name;
  }
  info(){
    return "La bebida es " + this.name;
  }
}

const drink = new Drink("Agua")
console.log(drink.info());

function Drink2(name){
  this.name = name;
  this.info = function() {
    return "La bebida es: "+ this.name
   }
}

const drink2 = new Drink2("agua")
console.log(drink2.info())

class Beer extends Drink{
  constructor(name, alcohol){
    super(name);
    this.alcohol = alcohol;
  }
  info(){
    return super.info() + " " + this.alcohol
  }
}

const beer = new Beer('XX', 3.5);
console.log(beer.info());