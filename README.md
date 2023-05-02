# TypeScript

## Creación de archivos TypeScript
Para crear un archivo de TypeScript se debe usar la extensión .ts
  - Ejemplo: archivo.ts

## Creación archivo de configuración de TypeScript
Para crear un archivo de configuración de TypeScript se debe usar el comando:
`tsc --init`
Este archivo creado: `tsconfig.json`, indica las especificaciones de configuración que se mantiene en el proyecto.

## Compilación de archivos TypeScript
Para compilar un archivo de TypeScript se debe usar el comando:
`tsc archivo.ts`.

Para mantener en modo observador y compilar todos los archivos de TypeScript se debe usar el comando:
`tsc -w` o `tsc --watch`.

Al ejecutar estos comandos, se crea un archivo .js con el mismo nombre del archivo .ts

# Introducción a los tipos
### Strings
```
"Matias Perez"
'TypeScript'
`<h1>Hola Mundo</h1>`
```
### Números
```
pi = 3.141592
salario = 1500.00
entero = 1
```
### Booleanos
```
Verdadero(true)
Falso(false)
```
### Null y Undefined
```
numero = null
persona = undefined
```
### Objetos Literales
```
var persona = {
  nombre: "Evan"
  edad: 26
}
```
### Clases
```
class persona{
  nombre;
  edad;
}
```
### Funciones
```
function saludar(){
  return "Hola Mundo";
}
```

Se pueden crear nuevos tipos a los que ya trae TS por defecto
También se pueden crear interfaces

[Documentación](http://www.typescriptlang.org/docs/handbook/basic-types.html)



## Declaración de tipos en TypeScript

### Booleans 
```
let es ironman: boolean = false;
let spiderman: boolean;
let AmericanCapitain: boolean = true;
```

## Funciones
Para indicar el tipo que retorna una función se coloca `:tipo` después de los parámetros y antes de los `{}`


```
function returnName():string {
    return hero;
}
```
## Funciones con argumentos obligatorios
Indicar el tipo de cada uno de los argumentos que recibe la función 

```
const fullName= (firstName:string, lastName?:(string)):string => {
  return `${firstName} ${lastName}`;
}

const name = fullName("Steve", "Rogers");
```
```console
{ name: 'Steve Rogers'}
```


## Funciones con argumentos opcionales
Para indicar que un argumento es opcional se coloca `?` después del nombre del argumento.
Al no recibir el argumento, este se convierte en `undefined` por lo que, en caso de utilizar este argumento dentro de la función este debe tener un valor por el cual debe ser reemplazado.

```
const fullName= (firstName:string, lastName?:(string)):string => {
  return `${firstName} ${lastName || "-"}`;
}

const name = fullName("Steve");
```

```console
{ name: 'Steve -'}
```
Seguido de parametros por opcionales, no es posible colocar parametros despues de estos, ya que no es permitido por TypeScript.

## Funciones con parámetros por defecto
El uso de parametros por defecto es similar al de los argumentos opcionales, pero en este caso se debe indicar el valor por defecto que tendrá el argumento en caso de no recibirlo.

```
  const fullName = (firstName: string, lastname?: string, upper: boolean= true): string =>{
    if(upper){
      return `${firstName} ${lastname || '---'}`.toLocaleUpperCase();
    }else{
      return `${firstName} ${lastname || '---'}`;
    }
  }

  const name = fullName("Steve", "Rogers", false);
  console.log({name});
```

## Argumentos REST
Independientemente del número de argumentos que reciba la función, se puede indicar que se recibirá un número indeterminado de argumentos, para esto se debe colocar `...` antes del nombre del argumento.

```
  const fullName = ( firstName:string, ...restArg:string[]): string =>{
    return `${firstName} ${restArg.join(" ")}`
  } 

  const superman = fullName("Clark");
  const superman2 = fullName("Clark", "Joseph");
  const superman3 = fullName("Clark", "Joseph", "Kent" );
  const superman4 = fullName("Clark", "Joseph", "Kent", "Superman" );

```

## Tipo función
Se puede indicar que una variable es de tipo función, para esto, después de los dos puntos, se debe indicar el tipo de dato que retorna la función y el tipo de dato de los argumentos que recibe la función.

```
  const greet = (name: string) => `Hola ${name}`;

  let myFunction: (y:string)=>string;

  let myFunction;

  myFunction = greet; // No se crea una copia de la función, se pasa la referencia de la función

  console.log(myFunction("Evan"));

```

Se puede indicar a una variable que solo sea de tipo función
```
let myFunction: Function;
```
Al indicar que la variable es de tipo función se verifica que este cumpla con los argumentos y el tipo de dato que retorna.

## Funcion que no retorna nada
Cuando una función no _retorna_ nada, se debe indicar que el tipo de dato que retorna es `void`

```
  const greet = (name: string): void => {
    console.log(`Hola ${name}`);
  }

  greet("Evan");

```