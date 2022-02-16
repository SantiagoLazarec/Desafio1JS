class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }
}
const persona1 = new Persona ("Fernando", "Larrosa", 25)
const persona2 = new Persona ("Tomas", "Lopez", 18)
const persona3 = new Persona ("Ricardo", "Rodruigez", 22)
const persona4 = new Persona ("Benjamin", "Gutierrez", 46)
const persona5 = new Persona ("Sebastian", "Tevez", 35)

let arrayPersonas = [persona1, persona2, persona3, persona4, persona5]

for(let i= 0; i < arrayPersonas.length; i++) {
    console.log(i)
    console.log(arrayPersonas[i])
}
for(let personaEnArray of arrayPersonas) {
    console.log(personaEnArray)
}
console.log(personaEnArray)

console.log(personaEnArray)