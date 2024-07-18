import React from 'react'
import { ColorCard } from './ColorCards/ColorCard'


const color_card_1 = {
    likes: 168,
    fecha: '22 hours',
    colores: ['#F6F5F2','#F0EBE3','#F3D0D7','#FFEFEF']
}

const color_card_2 = {
    likes: 125,
    fecha: '3 months',
    colores: ['#5A639C','#7776B3','#9B86BD','#E2BBE9']
}

const color_card_3 = {
    likes: 924,
    fecha: '5 months',
    colores: ['#D20062','#D6589F','#D895DA','#C4E4FF']
}

const color_card_4 = {
    likes: 476,
    fecha: '5 months',
    colores: ['#F8F4EC','#FF9BD2','#D63484','#402B3A']
}


const App = () => {
    return (
        <section className="color-cards">
            <ColorCard tarjeta={color_card_1}/>
            <ColorCard tarjeta={color_card_2}/>
            <ColorCard tarjeta={color_card_3}/>
            <ColorCard tarjeta={color_card_4}/>
        </section>
    )
}


export default App

