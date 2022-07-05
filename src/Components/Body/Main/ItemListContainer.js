import React, { useState} from "react";
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { SpinnerRoundOutlined } from 'spinners-react';


const ItemListContainer = ({greeting})=> {

    const [state, setState] = useState(false)
    setTimeout(()=>{
        return(
            setState(true)
        );
    }, 2000); 


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

    const [items, setItems] = useState(false);
    const item = ()=>{
        setItems(!items)
        setTimeout(()=>{
            return(
                setItems(false)
            );
        }, 2000); 

    }

    return(
        <>
            <p style={{ backgroundColor : 'green' }}>{greeting}</p>
            <div>
            {show ? <ItemCount stock='6' initial='0' onAdd={onAdd}/> : <h1>Estás a un click de tu próxima compra</h1> }
            {show ? null : <button onClick={cambio}>Click para iniciar tu compra</button>}
            <br />
            <br />
            <button  onClick={item}><ItemList/></button>
            <br />
            {items ? <SpinnerRoundOutlined enabled={true} /> : null }
            {items ?  null :  <SpinnerRoundOutlined enabled={false} />}
            </div>
        </>
)}

export default ItemListContainer