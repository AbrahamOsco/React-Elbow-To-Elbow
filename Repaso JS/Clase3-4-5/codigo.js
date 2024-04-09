// clase 3-4
let creed = ["Creed 1", "Creed 3", "Creed 2"]
let example = ` creed[0]: ${creed[0]} | creed[1] = ${creed[1]}`

console.log(example)
const appendAdmiration = (aString) => `${aString} + Go!`;
console.log( appendAdmiration("Hola mundo") )

const esVocalMatrix = (letra) => {
    if (letra.length > 1 ){
        return `Dato incorrecto ingresaste una palabra : ${letra}`
    }
    letra = letra.toLowerCase()
    let vocales = ['a','e', 'i', 'o', 'u']
    for(i = 0; i < vocales.length; i ++){
        if (vocales[i] == letra){
            return 'Es Vocal'
        } 
    }
    return `Dato incorrecto ingresaste la letra ${letra} que no es vocal`; 
}

// clase 5
console.log(esVocalMatrix(""));
let peliculas = ["Rock1", "Rock2", "Rocky3"]
let copy = [...peliculas, ...creed, "la final 3"]
console.log(copy)

let ejemplo = {
    nombre: "abr",
    apellido: "darko",
    titulo: "el titulo",
    ...peliculas,
}

console.log(ejemplo)

/*
let getNameAsync = async (unId) => {
    let result = fetch(`https://jsonplaceholder.typicode.com/users/${unId}`)
} 

getNameAsync(1)
*/

