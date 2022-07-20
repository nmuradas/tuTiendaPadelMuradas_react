import React, {useContext} from 'react';
import {contexto} from '../../Context/Contexto'



const Cart = () => {

    const { compras } = useContext(contexto);

    
    return (    
    <>
        <div>
        {compras.map((producto,idx)=>{
            return <div key={idx} style={styles.cards}>
                    <h2 >{producto[0].title} </h2>
                    <img  src={producto[0].pictureUrl} alt="" width={380} height={455}/>
                    <p >$ {producto[0].price}</p>
                    <p >Cantidad: {producto.qty}</p>
                    <button>Eliminar Producto</button>
                    <br />
                    <br />
                </div>
        })}
        </div>
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