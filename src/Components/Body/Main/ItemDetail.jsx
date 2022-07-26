import React, {useState,useContext} from "react";
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"
import {contexto} from '../../Context/Contexto'


const ItemDetail = ({items})=> {
    console.log(items.description)
    
    const { addCompras } = useContext(contexto);

    const [agregado, setAgregados] = useState(0);

    const onAdd = (contador)=>{   
        console.log(contador)
        setAgregados(agregado + contador)      
        alert("Usted ha agregado "+ contador + " elementos al carrito")
        setShow(!show)
        addCompras({...items, qty: contador});
    }


    const [show, setShow] = useState(true);
    const cambio = ()=>{
        console.log("El carrito tiene",agregado,"productos")
    }


    return(

                    <div style={styles.container}>
                            <h2 >{items.prodTitle} </h2>
                            <img src={items.pictureUrl} alt="" width={340} />
                            <p>${items.price}</p>
                            <p>{items.longDescription}</p>
                        {show ? <ItemCount stock='6' initial='0' onAdd={onAdd} /> : <Link to="/cart"><button onClick={cambio}>Finalizar compra</button></Link>}
                    </div>
);};

export default ItemDetail

const styles = {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        width:'420px',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 8px 4px #d3d3d3d1',
        borderRadius:'15px',
        fontFamily: 'sans-serif',
        marginBottom:'10px',
        marginTop:'20px',
    },
}