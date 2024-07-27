import React, { useState } from "react"

export const Contador = ({limit}) => {
    const [valorContador, setContador] = useState(0) /* de valor inicial le pongo 0 */
    const handleIncrementar = () => { /* le ponemos handle porque es una funcion asociada a un evento */
        if(valorContador != limit){
            setContador(valorContador + 1)
        }
    }
    const handleDecrementar = () => {
        if(valorContador != 0){
        setContador(valorContador - 1)
    }
    }
    return (
        <div>{/* abro llaves porque voy a ejecutar logica de JS */}
            {
                valorContador === 0 /* condicion */
                ? (<button onClick={handleIncrementar}>Comprar</button>)/* que pasa en caso de que se cumpla */
                : ( /* si no se cumple */
                    <>
                            <button onClick={handleDecrementar}>-</button>
                            <span>{valorContador}</span>
                            {
                                valorContador === limit     
                                ? <span>Haz llegado al limite</span>
                                : <button onClick={handleIncrementar}>+</button>
                            }
                    </>
                )
            }
            { valorContador > 1  && <h2>Bien, sigue comprando</h2>}
        </div>
    )
}

/* --------------------------------------------RENDERIZADO TERNARIO-------------------------------------------- */
/* renderizado condicional */

/* <div>
        { // abro llaves porque voy a aplicar logica de JS
        valorContador === 0 // CONDICION. si el contador es 0 
        ? (<button onClick={handleIncrementar}>Comprar</button>) // aparece el boton de comprar si es truthy (el signo de pregunta seria como el IF)
        :( // pero si es distinto de 0 (los dos puntos serian como el ELSE)
        <> // me aparecen los botones de incrementar o decrementar 
            <button onClick={handleDecrementar}>-</button>
            <span>{valorContador}</span>
            <button onClick={handleIncrementar}>+</button>
        </>
        }
        )   
    </div> */



/* --------------------------------------------RENDERIZADO IF SIMPLE-------------------------------------------- */
/* cuando no quiero hacer nada al ELSE, cuando solamente tenemos una condicion y queremos que cuando se cumpla dicha condicion se muestre algo hacemos esta condicion cortocircuito o circuito corto  */
/* ejemplo:
{valorContador > 1  && <h2>Bien, sigue comprando</h2>} 
si el valor de contador es mayor a 1 voy a mostrar un h2 que diga 'bien, sigue comprando'
*/