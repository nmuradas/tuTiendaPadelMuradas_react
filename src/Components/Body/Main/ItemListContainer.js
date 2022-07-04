import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount'
import ItemList from './ItemList'



const ItemListContainer = ({greeting})=> {

    
    const onAdd = (contador)=>{
        console.log(contador)
        localStorage.setItem("cantidad", contador)
        document.location.reload();
        alert("Usted ha agregado "+ contador + " elementos al carrito")
    }

    const [show, setShow] = useState(false);
    const cambio = ()=>{
        setShow(!show)
    }

    return(
        <>
            <p style={{ backgroundColor : 'green' }}>{greeting}</p>
            <div>
            {show ? <ItemCount stock='6' initial='0' onAdd={onAdd}/> : <h1>Estás a un click de tu próxima compra</h1> }
            {show ? null : <button onClick={cambio}>Click para iniciar tu compra</button>}
            <ItemList />
            </div>
        </>
)}

export default ItemListContainer