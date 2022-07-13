import React, { useState, useEffect } from "react";
import Item from './Item'
import { SpinnerCircular} from 'spinners-react';



const ItemList = ({initialProducts})=>  {
    
    const [state, setState] = useState(true)
    setTimeout(()=>{
        return(
            setState(false)
        );
    }, 2000); 

    const initialCategorias = [
    {id:0, title:'PRODUCTOS',},
]

const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return(
        resolve(initialCategorias));
    }, 2000);   
});


const [categorias, setCategorias] = useState([]);



    useEffect(()=>{
        promesa.then((data)=>{
            return (
            setCategorias(data))
        }).catch(()=>{
            console.log('Hubo un error');
        }).finally(()=>{
            console.log('finaliza');
        })
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const [detalles, setDetalles] = useState(false);
    const detalle = ()=>{
        setDetalles(!detalles)
    }

return(
    <>
        <div>
        {categorias.map((categoria)=>(
                    <button style={styles.button} onClick={detalle} key={categoria.id} type='SUBMIT' value='enviar'>{categoria.title} </button>
        ))}
        </div>
        <div>
        {detalles ? <Item initialProducts={initialProducts}/> : null }
        {state ? <SpinnerCircular enabled={true} /> : null }
        {state ? null : <SpinnerCircular enabled={false} />}
        
        </div>
        </>
)};

export default ItemList


const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        width:'220px',
        fontFamily: 'sans-serif',
        fontSize:'32px',
        margin:'auto',

    },
}