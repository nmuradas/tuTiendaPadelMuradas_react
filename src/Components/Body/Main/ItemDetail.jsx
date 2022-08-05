import React, {useState,useContext} from "react";
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"
import {contexto} from '../../Context/Contexto'
import Swal from 'sweetalert2'


const ItemDetail = ({items})=> {
    console.log(items.description)
    
    const { addCompras } = useContext(contexto);

    const [agregado, setAgregados] = useState(0);

    const onAdd = (contador)=>{   
        setAgregados(agregado + contador)      
        Swal.fire("Usted ha agregado "+ contador + " elementos al carrito")
        setShow(!show)
        addCompras({...items, qty: contador});
    }


    const [show, setShow] = useState(true);

    return(

                    <div style={styles.container}>
                            <h2 >{items.prodTitle} </h2>
                            <img src={items.pictureUrl} alt="" width={340} />
                            <p>Precio por unidad ${items.price}</p>
                            <p>{items.longDescription}</p>
                        {show ? <ItemCount stock='6' initial='0' onAdd={onAdd} /> : <Link to="/cart"><button style={styles.btn}>COMPRAR</button></Link>}
                        <br />
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
        margin: 'auto',
        marginTop:'20px',
    },
    btn: {
        backgroundColor:"lightGray",
        borderRadius: 5,
        borderColor: 'white', 
        borderWidth: 2,
        borderStyle: 'solid', 
        fontWeight: 'bold', 
        marginBottom: '20px',
    },
}