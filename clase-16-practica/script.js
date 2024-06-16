/* -------------------------- EJERCICIOS DE ARRAYS -------------------------- */

/* 1
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]

Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
 */

/* respuesta */

/* 
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]

let sumatoria = 0
for(let i = 0; i < personajes.length; i++){
    const personaje = personajes[i]
    console .log ('Hola mi nombre es ' + personaje.nombre + ' '+ personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoria = sumatoria + personaje.edad
}

console .log('total de edades: ' + sumatoria)

 */

/* -------------------------- EJERCICIOS DE METODOS AVANZADOS DE ARRAYS -------------------------- */


/* 1
const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tV LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'

 */

/* respuesta */

/* 
const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblEx',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

const productoPrecio = productos.filter(function(producto){
    return (producto.precio <= 2950)
})

console.log(productoPrecio)

const marcaNoblex = productos.filter(function(producto){
    return (producto.marca.toLocaleLowerCase() === 'noblex'.toLocaleLowerCase())
})

console.log (marcaNoblex)

const productostv = productos.filter(function(producto){
    return ( (producto.nombre.toLocaleLowerCase()).includes('tv'.toLocaleLowerCase()) )
})

console.log(productostv)

 */

/* 
.some()

const numeros = [1, 2, 3, 4, 5];

const numeroPar = numeros.some(numero => numero % 2 === 0);
console.log(numeroPar); // true

const numeroMayorA10 = numeros.some(numero => numero > 10);
console.log(numeroMayorA10); // false
 */



/* .every()

const numeros = [1, 2, 3, 4, 5];

const esMayorA0 = numeros.every(numero => numero > 0);
console.log(esMayorA0); // true

const sonTodosMayorA1 = numeros.every(numero => numero > 1);
console.log(sonTodosMayorA1); // false
 */

/* 
.findIndex()
const numeros = [2, 8, 1, 3, 4];

const esImpar = numeros.findIndex(numero => numero % 2 !== 0)
console.log(esImpar); // 2

const numeroMayorA10 = numeros.findIndex(numero => numero > 10)
console.log(numeroMayorA10); // -1 
*/