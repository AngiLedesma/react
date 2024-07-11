
import { useState } from "react";
import '../styles/estado.css';

function EjemploEstado(props) {

    const [counter, setCounter]= useState(0);

    return (
        <div className="contenedor">
            <div className="counter">
                <h3>Contar:{counter} </h3>
            </div>

            <div className="botones">

                <button className="success" onClick={()=> setCounter (counter +1)}>+</button>
                <button className="error" onClick={()=> setCounter (counter -1)} >-</button>
                
            </div>
        </div>



    )

}

export {EjemploEstado}