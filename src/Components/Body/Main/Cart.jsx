import React, {useContext, useState, useEffect} from 'react';
import CompradorFormulario from './CompradorFormulario';
import {contexto} from '../../Context/Contexto'
import { Link } from "react-router-dom"
import { db } from '../../../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'


const Cart = () => {

    const { compras,removeCompras, totalPrice,resetCompras } = useContext(contexto);     

    const [idVenta, setIdVenta] = useState("")

    const finalizarCompra = (buyer) => {

        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            buyer,
            items: compras,
            fecha_de_compra: serverTimestamp(),
            precioTotal: totalPrice
            })
        .then((result)=>{
            setIdVenta(result.id);
        }
        )
    }

    useEffect(()=>{
        if(idVenta !==''){
Swal.fire({
    icon: 'success',
    title: 'FELICITACIONES',
    text: ('Por favor toma nota del numero de pedido, muchas gracias por tu compra', idVenta),
    confirmButtonText: 'OK',
})
        resetCompras()
    }
    },[idVenta]
    )

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
                    <p >Cantidad: {producto.qty}</p>
                    <p >Precio total: $ {producto.price * producto.qty}</p>                 
                    <button onClick={removerItem} id={producto.id}>Eliminar Producto</button>
                    <br />
                    <br />
                </div>
        })}
        </div>
        {totalPrice > 0 ? <div><h2>Precio Total: $ { totalPrice }</h2> <CompradorFormulario finalizarCompra={finalizarCompra}/> </div>  : <div><h2>No tienes productos en tu carrito de compras</h2>  <Link to="/"><button>Volvé al Inicio para conocer nuestros productos</button></ Link> </div> }
        
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