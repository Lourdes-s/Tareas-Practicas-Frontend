/* mostrar por alerta el conteo de 1 al 10 (se deben ejecutar 10 alertas) */

/* for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
    alert(iterador)
}



 */
/* Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes una alerta que muestre la sumatoria de los 3 numeros 

dime un numero:3
dime un numero:3
dime un numero:4
alert> 10
*/

/* let sumatoria = 0

for(let i = 1; i <= 3; i = i + 1){
let numero = prompt('ingrese un numero')
while(!numero || isNaN(numero)) {
    numero = prompt('ERROR: DATO NO VALIDO')
} 
numero = Number (numero)
sumatoria = sumatoria + numero 
}

alert ('resultado: ' + sumatoria)
 */



/* Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre

(si la cantidad de personas de la clase es 5, van a solicitar 5 nombres

    lueg de solicitar los 5 nombres mostrarlos en este formato:
    lista alumnos:
    -juan
    -Pepe
    -maria 
    -carla 
    -julieta 
     */



let lista = ('lista alumnos: ')

let personas = prompt('ingrese la cantidad de personas en la clase')
while(!personas || isNaN(personas)){
    personas = prompt('ERROR: INGRESE UN NUMERO')
}
personas = Number(personas)

for (let i = 1; i <= personas; i = i + 1){
let nombre = prompt ('ingrese el nombre de cada persona')
lista = lista + '\n-' + nombre
}

alert (lista)