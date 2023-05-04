# TypeScript

## Creación de archivos TypeScript

Para crear un archivo de TypeScript se debe usar la extensión .ts

- Ejemplo: archivo.ts

## Creación archivo de configuración de TypeScript

Para crear un archivo de configuración de TypeScript se debe usar el comando:
`tsc --init`
Este archivo creado: `tsconfig.json`, indica las especificaciones de configuración que se mantiene en el proyecto.

## Compilación de archivos

Para compilar un archivo de TypeScript se debe usar el comando:
`tsc archivo.ts`.

Para mantener en modo observador y compilar todos los archivos de TypeScript se debe usar el comando:
`tsc -w` o `tsc --watch`.

Al ejecutar estos comandos, se crea un archivo .js con el mismo nombre del archivo .ts

## Introducción a los tipos

### Strings

```typescript
"Matias Perez"
'TypeScript'
`<h1>Hola Mundo</h1>`
```

### Numbers

```typescript
pi = 3.141592
salario = 1500.00
entero = 1
```

### Booleanos

```typescript
Verdadero(true)
Falso(false)
```

### Null y Undefined

```typescript
numero = null
persona = undefined
```

### Objetos

```typescript
var persona = {
  nombre: "Evan"
  edad: 26
}
```

### Clases

```typescript
class persona{
  nombre;
  edad;
}
```

### Declaración de tipos

```typescript
let nombre: string = "Peter";
let numero: number = 123;
let booleano: boolean = true;
let hoy: Date = new Date();
let cualquiera: any;
```

### Funciones

```typescript
function saludar(){
  return "Hola Mundo";
}
```

Se pueden crear nuevos tipos a los que ya trae TS por defecto
También se pueden crear interfaces

[Documentación](http://www.typescriptlang.org/docs/handbook/basic-types.html)

Para indicar el tipo que retorna una función se coloca `:tipo` después de los parámetros y antes de los `{}`

```typescript
function returnName():string {
    return hero;
}
```

### Funciones con argumentos obligatorios

Indicar el tipo de cada uno de los argumentos que recibe la función

```typescript
const fullName= (firstName:string, lastName?:(string)):string => {
  return `${firstName} ${lastName}`;
}

const name = fullName("Steve", "Rogers");
```

```console
{ name: 'Steve Rogers'}
```

### Funciones con argumentos opcionales

Para indicar que un argumento es opcional se coloca `?` después del nombre del argumento.
Al no recibir el argumento, este se convierte en `undefined` por lo que, en caso de utilizar este argumento dentro de la función este debe tener un valor por el cual debe ser reemplazado.

```typescript
const fullName= (firstName:string, lastName?:(string)):string => {
  return `${firstName} ${lastName || "-"}`;
}

const name = fullName("Steve");
```

```console
{ name: 'Steve -'}
```

Seguido de parámetros por opcionales, no es posible colocar parámetros después de estos, ya que no es permitido por TypeScript.

### Funciones con parámetros por defecto

El uso de parámetros por defecto es similar al de los argumentos opcionales, pero en este caso se debe indicar el valor por defecto que tendrá el argumento en caso de no recibirlo.

```typescript
  const fullName = (firstName: string, lastName?: string, upper: boolean= true): string =>{
    if(upper){
      return `${firstName} ${lastName || '---'}`.toLocaleUpperCase();
    }else{
      return `${firstName} ${lastName || '---'}`;
    }
  }

  const name = fullName("Steve", "Rogers", false);
  console.log({name});
```

### Argumentos REST

Independientemente del número de argumentos que reciba la función, se puede indicar que se recibirá un número indeterminado de argumentos, para esto se debe colocar `...` antes del nombre del argumento.

```typescript
  const fullName = ( firstName:string, ...restArg:string[]): string =>{
    return `${firstName} ${restArg.join(" ")}`
  } 

  const superman = fullName("Clark");
  const superman2 = fullName("Clark", "Joseph");
  const superman3 = fullName("Clark", "Joseph", "Kent" );
  const superman4 = fullName("Clark", "Joseph", "Kent", "Superman" );

```

### Tipo función

Se puede indicar que una variable es de tipo función, para esto, después de los dos puntos, se debe indicar el tipo de dato que retorna la función y el tipo de dato de los argumentos que recibe la función.

```typescript
  const greet = (name: string) => `Hola ${name}`;

  let myFunction: (y:string)=>string;

  let myFunction;

  myFunction = greet; // No se crea una copia de la función, se pasa la referencia de la función

  console.log(myFunction("Evan"));

```

Se puede indicar a una variable que solo sea de tipo función

```typescript
let myFunction: Function;
```

Al indicar que la variable es de tipo función se verifica que este cumpla con los argumentos y el tipo de dato que retorna.

### Función que no retorna nada

Cuando una función no _retorna_ nada, se debe indicar que el tipo de dato que retorna es `void`

```typescript
  const greet = (name: string): void => {
    console.log(`Hola ${name}`);
  }

  greet("Evan");

```

## Tipos Personalizados

### Objetos básicos

En Typescript al igual que en Javascript se pueden crear Objetos

```Terminal
  let flash:  = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  }
```

### Crear Objetos con tipos específicos

En Typescript los se pueden declarar objetos especificando el tipo de dato que tendrá cada una de las propiedades del objeto.
La declaración de tipos específicos se debe indicar después de la variable

```Terminal
  let flash: {name: string, age: number, powers: string[]} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  }
```

### Crear métodos dentro de objetos

Al igual que se pueden declarar métodos dentro de ellos:
  
```Terminal
  let flash: { getName: () => string} = {
    getName(){
      return this.name;
    }
  }
```

Los métodos pueden retornar o no algún valor, en caso de no retornar nada se debe indicar que el tipo de dato que retorna es `void`

```Terminal
  let flash: { getName: () => void} = {
    getName(){
      console.log(this.name);
    }
  }
```

Para retornar algún valor el método debe indicar el tipo de dato que retorna

```Terminal
  let flash: { getName: () => string} = {
    getName(){
      return this.name;
    }
  }
```

### Tipos personalizados

Para declarar objetos personalizados se deben crear con la palabra reservada `type` y declarando el objeto con sus propiedades y tipos de datos.

```Terminal
// Declaración de tipo personalizado
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

// Declaración de un objeto con un tipo personalizado
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
    getName(){
      return this.name;
    }
  }
```

### Crear variables que soporten varios tipos a la vez

Las variables pueden soportar ser declaradas con varios tipos de datos a las vez, para esto se debe indicar el tipo de dato que soporta la variable separado por `|`

```Terminal
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string
  }

  let myCustomVariable: ( string | number | Hero )= 'Evan'; // Los paréntesis son opcionales 

  myVariable = 20;
  myVariable = true;
```

### Comprobar el tipo de objeto

Para comprobar el tipo de dato de una variable se puede realizar con la palabra reservada `typeof` pero al verificarlo en javascript este retornara el tipo de dato que conoce Javascript, por lo que objetos personalizados no pueden ser visualizados.

```Terminal
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string
  }

  let myCustomVariable: ( string | number | Hero )= 'Evan'; // Los paréntesis son opcionales 

  myVariable = 20;
  myVariable = true;

  console.log(typeof myCustomVariable);
```

## Depuración de errores y el archivo tsconfig.json

### Qué es el archivo tsconfig.ts?

El archivo tsconfig.json es un archivo de configuración de Typescript, en el se pueden indicar las configuraciones que se desean para el proyecto. En el cual podemos indicar el directorio donde se encuentra el código fuente, el directorio donde se guardaran los archivos compilados, el tipo de compilación que se desea, entre otras configuraciones.
[tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### Depuración de código

A veces el código necesita cosas mas profundas y en lugar de usar console.log para visualizar en debugger del navegador, pero este debugger muestra el numero de linea que aparece en el archivo JS mas no el de TS, para esto, podemos indicar en el archivo tsconfig que se genere un archivo de mapa de bits, para esto se debe indicar en el archivo tsconfig.json la propiedad `sourceMap` en `true`

```json
  {
    "compilerOptions": {
      "sourceMap": true
    }
  }
```

Esto nos ayudara a visualizar la linea de código en el archivo TS y no en el archivo JS.

### Remover comentarios de los archivos de JavaScript

La configuración que se necesita para remover comentarios en los archivos transpilados de Javascript es descomentar `removeComments` en `true`

```json
  {
    "compilerOptions": {
      "removeComments": true
    }
  }
```

### Incluir y excluir 

Podemos hacer que el compilador de Typescript solo compile los archivos que necesitamos, para esto se debe indicar en el archivo tsconfig.json la propiedad `include` y `exclude` en un arreglo de strings con los directorios que se desean incluir o  en el proyecto.

```json
  {
    "compilerOptions": {
      "include": [
        "src/**/*"
      ],
      "exclude": [
        "node_modules",
        "**/*.spec.ts"
      ]
    }
  }
```

Por defecto la carpeta `node_modules` se excluye, por lo que no es necesario indicarla en el archivo tsconfig.json

### outFile

Al descomentar esta linea, indicamos que se debe generar un solo archivo de salida con el nombre que se indique en la propiedad `outFile`.

```json
  {
    "compilerOptions": {
      "outFile": "./main.js"
    }
  }
```

Lo cual genera que no existan multiples archivos .js por cada archivo .ts
