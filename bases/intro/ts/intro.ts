console.log("Hola desde TS");

class Drink{
  private name:string;

  constructor(name:string){
    this.name = name
  }

  info(): string {
    return this.name;
  }
}

const drink = new Drink('Agua')
console.log(drink.info()); 

// Interface
interface Product {
  price: number;
  getPrice(): string;
}

// Herencia
class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name:string, alcohol:number, price: number){
    super(name);
    this.price = price
    this.alcohol = alcohol;
  }

  getPrice(): string{
    return "$"+ this.price;
  }

  info(): string{
    return super.info() + ' ' + this.alcohol;
  }
}

//Implementación de interface
class Snack implements Product{
  name: string;
  price: number;

  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
  }
  
  getPrice(): string {
    return "El precio es: $"+this.price;
  }
}


const beer = new Beer("XX", 8.5, 48 )
console.log(beer.info());

const papitas = new Snack("papas", 40);
console.log(papitas.name);
console.log(papitas.getPrice());