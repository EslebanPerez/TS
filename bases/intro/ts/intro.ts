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