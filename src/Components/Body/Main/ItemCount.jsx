import React, { useState } from "react";

export let resultado = 0;

const ItemCount = ({stock, initial, onAdd})=> {
    const [contador, setContador] = useState(parseInt(initial));


    const agregar = () => {
        setContador(contador<stock ? contador + 1 : contador)}
    
    const quitar = () => {
        setContador(contador>0 ? contador - 1 : 0)}
        
    
    return (
        <>
            <div>Mis productos</div>
            <div>{contador}</div>
            <button onClick={agregar} >Agregar productos</button>
            <button onClick={quitar} >Quitar productos</button>
            <button onClick={()=>{contador>0 ? onAdd(contador) : alert("No hay productos en el carrito")}}>Agregar al carrito</button>

        </>
    )

}

export default ItemCount
