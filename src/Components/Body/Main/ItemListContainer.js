import React from "react";
import ItemCount from './ItemCount'


const ItemListContainer = ({greeting})=> {

    const onAdd = (contador)=>{
        console.log(contador)
        localStorage.setItem("cantidad", contador)
        document.location.reload();
        alert("Usted ha agregado "+ contador + " elementos al carrito")
    }

    return(
        <>
            <p style={{ backgroundColor : 'green' }}>{greeting}</p>
            <div>
            <ItemCount stock='6' initial='0' onAdd={onAdd}/>
            </div>
        </>
)}

export default ItemListContainer