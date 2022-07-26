import React, {useContext} from 'react';
import {contexto} from '../../Context/Contexto'
import { Link } from "react-router-dom"



const Cart = () => {

    const { compras,removeCompras, totalPrice } = useContext(contexto);
    console.log(totalPrice)

    const removerItem = (e)=>{
        removeCompras(e.target.id);
    }

    
    return (    
    <>
        <div>
        {compras.map((producto,idx)=>{
            return <div key={idx} style={styles.cards}>
                    <h2 >{producto.prodTitle} </h2>
                    <img  src={producto.pictureUrl} alt="" width={380} height={455}/>
                    <p >$ {producto.price} por unidad</p>
                    <p >Cantidad: {producto.qty}</p>
                    <button onClick={removerItem} id={producto.id}>Eliminar Producto</button>
                    <br />
                    <br />
                </div>
        })}
        </div>
        {totalPrice > 0 ? <h2>Precio Total: $ { totalPrice }</h2> : <div><h2>No tienes productos en tu carrito de compras</h2>  <Link to="/"><button>Volvé al Inicio para conocer nuestros productos</button></ Link> </div> }
        
    </>
    )
}

export default Cart

const styles = {
    cards: {
 
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        width:'420px',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 8px 4px #d3d3d3d1',
        borderRadius:'15px',
        fontFamily: 'sans-serif',
        marginBottom:'10px',
        marginTop:'20px',
        marginLeft:'auto',
        marginRight:'auto',
    },
}