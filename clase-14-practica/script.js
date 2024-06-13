
/* -------------------------- HACER UNA FUNCION -------------------------- */

/* 1 
calcularIva(precio) => el valor del iva
calcularIva(100) => 21
*/

/*respuesta */

/* 
function calcularIva (precio){
    return precio * 0.21
} 
*/

/* 2
calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
*/

/* respuesta */

/* 
function calcularMinutos(horas){
    return horas * 60
} 
*/

/* 3
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero 
 */

/* respuesta */

/* 
function obtenerNumero (){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero))
        nombre = prompt('ERROR:por favor ingrese un numero')
    return numero
}
 */



/* -------------------------- EJERCICIOS DE ACUMULACIONES -------------------------- */

/* 1
mostrar por alerta el conteo de 1 al 10 (se deben ejecutar 10 alertas) 
*/

/* respuesta */

/* 
for (let i = 1; i <= 10; i = i + 1){
    alert(i)
}
 */

/* 2
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes una alerta que muestre la sumatoria de los 3 numeros 

dime un numero:3
dime un numero:3
dime un numero:4
alert> 10
*/

/* respuesta */

/* 
let sumatoria = 0
for(let i = 1; i <= 3; i = i + 1 ){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        numero = prompt('ERROR: dato no valido. Ingrese un numero')
    }
numero = Number (numero)
sumatoria = sumatoria + numero
}
alert (sumatoria)

 */


/* 3
Solicitar al usuario la cantidad de personas en la clase (numero)
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

/* respuesta */

/* 
let lista = ('Lista de alumnos:')
let alumnos = prompt('ingrese la cantidad de alumnos')
while(!alumnos || isNaN(alumnos)){
    alumnos = prompt('ERROR: ingrese un numero')
}
alumnos = Number(alumnos)
for(let i = 1; i <= alumnos; i = i + 1){
    let nombre = prompt('Escribe el nombre de cada uno')
    lista = lista + '\n-' + nombre
}

alert(lista)
 */