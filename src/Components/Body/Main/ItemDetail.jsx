import React, {useState} from "react";
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"



const ItemDetail = ({items})=> {



    const [compra, setCompras] = useState(0);

    const onAdd = (contador)=>{   
        setCompras(compra + contador)      
        localStorage.setItem("cantidad", contador)
        alert("Usted ha agregado "+ contador + " elementos al carrito")
        setShow(!show)

        
    }

    const [show, setShow] = useState(true);
    const cambio = (contador)=>{
        setCompras(compra + contador)
        console.log("El carrito tiene",compra,"productos")
    }


    return(
        <>
            <div>
            {items.map((producto, id)=>{
                return <div key={id} style={styles.container}>
                        <h2 >{producto.title} </h2>
                        <img src={producto.pictureUrl} alt="" width={340} />
                        <p>${producto.price}</p>
                        <p>{producto.description}</p>
                        {show ? <ItemCount stock='6' initial='0' onAdd={onAdd}/> : <h1>Estás a un click de tu próxima compra</h1> }
                        {show ? null : <Link to="/cart"><button onClick={cambio}>Finalizar compra</button></Link>}
                    </div>
            })}
            </div>

        </>
)};

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