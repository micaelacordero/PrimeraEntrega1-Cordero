import { useState } from "react";
import React from 'react';
const ItemCount = ({valInicial, stock}) => {
 const [contador, setContador] = useState(valInicial)
 const sumar = () => (contador < stock) && setContador(contador + 1)
 const restar = () => (contador > valInicial) && setContador(contador - 1) 

    return (
        <> 
            <button className='btn bnt-dark' onClick={() => sumar()}>+</button>
                         {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
        </>
    );
}

export default ItemCount;



