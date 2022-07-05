import React, { useState} from "react";


export let resultado = 0;

const ItemCount = ({stock, initial, onAdd})=> {
    const [contador, setContador] = useState(parseInt(initial));



    const agregar = () => {
        setContador(contador<stock ? contador + 1 : contador)}
    
    const quitar = () => {
        setContador(contador>0 ? contador - 1 : 0)}

    const vaciar = () => {
        localStorage.setItem("cantidad", 0)
        document.location.reload();
        alert("Su carrito de compras ahora se encuentra vacio")}
        
    
    return (
        <section style={styles.container}>
            <div>MIS PRODUCTOS</div>
            <div>{contador}</div>
            <br />
            <button onClick={agregar} >➕</button>
            <button onClick={quitar} >➖</button> <br /> <br />
            <button onClick={()=>{contador>0 ? onAdd(contador) : alert("No hay productos en el carrito")}}>Agregar al carrito</button>
            <button onClick={()=>{localStorage.cantidad>0 ? vaciar() : alert("No hay productos en el carrito")}}>Vaciar Carrito</button>
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