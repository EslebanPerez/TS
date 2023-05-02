(()=>{
  const addNumbers = ( a:number, b: number) => a+b;
  const greet = (name: string) => `Hola ${name}`;
  const SaveTheWorld = ()=>`El mundo esta a salvo`

  let myFunction: (y:string)=>string; // Indica que la variable acepte funciones solo de cierto tipo

  // A esta asignación marcara error ya que no es una función
  // myFunction=10;
  // console.log(myFunction);

  // Esta función no cumple con la especificación 
  /*myFunction=addNumbers
  console.log(myFunction(1,2));*/

  // Esta asignación de función a la variable cumple con la especificación, ya que recibe y retorna un tipo string
  myFunction=greet
  console.log(myFunction("Evan"))

  //Esta función no cumple con la especificación
  /*myFunction=SaveTheWorld
  console.log(myFunction())*/

})()