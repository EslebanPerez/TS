(()=>{

// Objetos
type superCar={
  carroceria:string, 
  modelo:string, 
  antibalas:boolean, 
  pasajeros:number, 
  disparar?:()=>void
}

const batimovil: superCar = {
  modelo: "6x6",
  carroceria: "Negra",
  pasajeros:4,
  antibalas: true,
};

const bumblebee: superCar= {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villano={
  nombre: string,
  edad: number|undefined,
  mutante: boolean,
}

const villanos: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles={
  poder:string,
  estatura:number
}

const charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis = {
  lider:boolean,
  miembros: string[]
}

const apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

console.log(apocalipsis);

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Apocalipsis | Charles;

mystique = charles;
mystique = apocalipsis;

})()