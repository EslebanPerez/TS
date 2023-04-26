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




