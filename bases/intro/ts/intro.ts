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

const productos : Product[]= [
  new Beer("XX", 8.5, 48 ),
  new Snack("Papas", 40),
  new Beer("Victoria", 3.5, 20 ),
];

function getPrices(items: Product[]){
  for(const item of items){
    console.log(item.getPrice());
  }
}

getPrices(productos)
