
/* -------------------------- EJERCICIOS DE OBJETOS -------------------------- */

/* 1
Crear un objeto llamado producto que tenga 
precio, nombre, descripcion y marca 
*/

/* respuesta */

/* 
const producto = {
    precio: 10000,
    nombre: 'Auriculares Opus X',
    descripcion: 'Auriculares gamer',
    marca: 'razer'
}
 */


/* 2
vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad
*/

/* respuestas */

/* 
const persona = {
    nombre: 'sebastian',
    edad: 30,
    mejorAmigo: {
        nombre:'claudio',
        edad: 36
    }
}
 */


/* 3 
cambiar el nombre del mejorAmigo a 'pepe'
y crear la propiedad nroCelular a persona 
*/

/* respuesta */

/* 
const persona = {
    nombre: 'sebastian',
    edad: 30,
    mejorAmigo: {
        nombre:'claudio',
        edad: 36
    }
}

persona.mejorAmigo.nombre = 'pepe'
persona.nroCelular = 5491134835673

console.log(persona)
 */



/* -------------------------- EJERCICIOS DE ARRAYS -------------------------- */

/* 1
eliminar a juan y a maria
const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
] 
*/

/* respuesta */

/* 
    const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
    ]

nombres.splice(nombres.indexOf('maria'), 1)
nombres.splice(nombres.indexOf('juan'), 1)
console .log(nombres)
 */


/* 2
Hacer una funcion para aplicar el principio dry 
 */ 

/* respuestas */

/* 
function eliminarNombre(listaDeNombres, nombreAEliminar){
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}
 */


/* 3
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
*/

/* respuesta */

/* 
let url = prompt('ingrese su url')
while (url == " " || url == null){
    url = prompt('DATO NO VALIDO: por favor ingrese un url')
}
if (url.includes('https://')){
    url = prompt('la url ingresada, cuenta con certificado ssl')
}
else if (url.includes('http://')){
    url = prompt('la url ingresada no cuenta con certificado ssl')
}
else if(!url.includes('https://') || !url.includes('http://')){
    url = prompt ('no has ingresado una url valida')
}
 */


/* 4
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" 
*/

/* 
function decodificar_texto(textoCodificado) {
    let codigoDescifrado = textoCodificado.replaceAll('%20', ' ')
    return 'El codigo descifrado es:' + codigoDescifrado
}

function contador_caracteres(texto){
    if (texto.lengt <= 8){
        return 'el mensaje es corto'
    }
    else if (texto.lengt >= 9 && texto.lengt <= 18){
        return 'el mensaje es mediano'
    }
    else if (texto.lengt > 18){
        return 'el mensaje es largo'
    }
}

function verificador_de_complejidad(textoAVerificar){
    if (textoAVerificar.includes(',') || textoAVerificar.includes('@') || textoAVerificar.includes('-'))
        return 'el mensaje es complejo'
    else{
        return 'el mensaje no es complejo'
    }
}

let Texto1 = "hola%20como%20estas,%20todo%bien?"
console .log('El codigo descifrado es:' +)????????????

 */


/* 5
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior.
*/

/* respuesta */

/* 
let mensaje = prompt('ingrese un mensaje')

mensajeCifrado = mensaje.replaceAll('%20', ' ')

function decodificar_texto(textoCodificado) {
    let codigoDescifrado = textoCodificado.replaceAll('%20', ' ')
    return 'El codigo descifrado es:' + codigoDescifrado
}


/* 6
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula" 
*/

/* respuesta */

/* 
let palabra = prompt('ingrese una palabra')
while (palabra == " " || palabra == null){
    palabra = prompt('dato no valido. por favor ingrese una palabra')
}
 */


