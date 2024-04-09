
let nombre = "darko"
const apellido = "skure"
/*
console.log(nombre + " " + apellido);
let num1 = Number(prompt("Ingrese un numero1: "))
let num2 = Number(prompt("Ingrese un numero2: "))
alert(num1 + num2)
*/

function add(name, num1, num2){
    document.write(`El nombre es: ${name} y la suma total es: $${num1 + num2}`)
    return num1 + num2;
}
//add(prompt("Input your name"), Number(prompt("Input a number")), Number(prompt("Input antoher number")) )

let restar = (num1, num2) => { 
    return num1 - num2;
}
let saludar = unNombre => `Hola ${unNombre} jaja` 
let edad = 30
let valor = edad > 18 ? "Puede pasar" : "No puede pasar" 

console.log(`El resultado es:  ${valor}`);
console.log(restar(100, 23)); 
console.log(saludar("Mario bros"));


let sumar = (num1, num2) => num1 + num2;
let restar2 = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 *num2;
let dividir = (num1, num2) => num1/num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2)

console.log(calculadora(10, 20, dividir))


