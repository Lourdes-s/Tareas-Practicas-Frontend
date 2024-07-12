const historial = [
    {
        id:'001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
] 

const listaHistorialHTML = document.querySelector('#lista-historial')
let itemHistorial = ''

for(const item of historial){

    itemHistorial = itemHistorial + `
    <div class='historial-item'>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
    </div>
    `
} 

listaHistorialHTML.innerHTML = itemHistorial

const historialItemHTML = document.getElementsByClassName('historial-item')

console.log(historialItemHTML)

for(const item of historialItemHTML){
    const btn = document.createElement('button')
    btn.innerText = 'Ver publicacion'
    item.appendChild(btn)
}
