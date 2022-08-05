import React, {useState,useContext} from "react";
import {contexto} from '../../Context/Contexto'
import Swal from 'sweetalert2'



const ItemCount = ({stock, initial, onAdd})=> {
    const [contador, setContador] = useState(parseInt(initial));
    const { resetCompras, qtyProducts } = useContext(contexto);


    const agregar = () => {
        setContador(contador<stock ? contador + 1 : contador)
    }
    
    const quitar = () => {
        setContador(contador>0 ? contador - 1 : 0)}

    const vaciar = () => {
        resetCompras()
        Swal.fire("Se ha vaciado el carrito")
    }
        
    
    return (
        <section style={styles.container}>
            <div>Mi Carrito</div>
            <div>{contador}</div>
            <br />
            <button onClick={agregar} ><span role="img" aria-labelledby="plus">➕</span></button>
            <button onClick={quitar} ><span role="img" aria-labelledby="minus">➖</span></button> <br /> <br />
            <button onClick={()=>{contador>0 ? onAdd(contador) : Swal.fire("No hay productos en el carrito")}}>Agregar al carrito</button>
            <button onClick={()=>{qtyProducts > 0 ? vaciar() : Swal.fire("No hay productos en el carrito")}}>Vaciar Carrito</button>
        </section>
    )

}

export default ItemCount

const styles = {
    container: {
        backgroundColor:"gray",
        maxWidth:340,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        borderRadius: 15,
        borderColor: 'blue', 
        borderWidth: 5,
        borderStyle: 'solid', 
        fontWeight: 'bold', 
    },}