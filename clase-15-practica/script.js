/* Crear un objeto llamado producto que tenga 
precio, nombre, descripcion y marca */

/* let producto = {
    precio: 100000,
    nombre: 'auriculares',  
    descripcion: 'auriculares quartz razer opus x',
    marca: 'razer',
}
 */


/* vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad
  */

/* let persona = {
    nombre: 'sebastian',
    edad: 20,
    mejorAmigo: {
        nombre: 'camilo',
        edad: 27
    }
} */

/* 
cambiar el nombre del mejorAmigo a 'pepe'
y crear la propiedad nroCelular a persona */

/* 
const persona = {
    nombre: 'sebastian',
    edad: 20,
    mejorAmigo: {
        nombre: 'camilo',
        edad: 27
    }
} 

persona.nroCelular = 5491197675443
persona.mejorAmigo.nombre = 'pepe'


console .log(persona) 
 */




/* ARRAYS */

/* 
eliminar a juan y a maria
const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
] */

/* respuesta: */
/* 
    const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
    ]


    let posicionDeMaria = nombres.lastIndexOf('maria')
    let posicionDeJuan = nombres.lastIndexOf('juan')

    nombres.splice(posicionDeMaria, 1)
    nombres.splice(posicionDeJuan, 1)

    console .log(nombres) 
 */

/*     Caso correcto: */
/*     
nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1) 
*/


/* Hacer una funcion para aplicar el principio dry */


/*
function eliminarNombre(listaDeNombres, nombreAEliminar){
listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}
 */ 