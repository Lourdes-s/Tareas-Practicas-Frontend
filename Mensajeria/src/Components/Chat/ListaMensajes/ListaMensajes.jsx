import React from 'react'

export const ListaMensajes = ({ mensajesChat }) => {
    return (
            <>
                {mensajesChat.map((mensajeInfo2, index) => <Mensaje mensajeInfo={mensajeInfo2} key={'mensaje' + index}/>)}
            </>
)
}

export const Mensaje = ({mensajeInfo}) => {
    const {author, text, estado, day, hour} = mensajeInfo
    return(
        <div>
            <div>
                <span>{author}</span>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <span>{estado}</span>
                <span>{day}</span>
                <span>{hour}</span>
            </div>
        </div>
    )
}
