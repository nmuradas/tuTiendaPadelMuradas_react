import React, { useState, useEffect } from "react";
import Item from './Item'
import { SpinnerCircular} from 'spinners-react';



const ItemList = ()=>  {
    
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
    },[]);

    const [detalles, setDetalles] = useState(false);
    const detalle = ()=>{
        setDetalles(!detalles)
    }

return(
    <>
        <div>
        {categorias.map((categoria)=>(
                    <button onClick={detalle} style={styles.button} key={categoria.id} type='SUBMIT' value='enviar'>{categoria.title} </button>
        ))}
        </div>
        <div>
        {detalles ? <Item/> : null }
        {state ? <SpinnerCircular enabled={true} /> : null }
        {state ? null : <SpinnerCircular enabled={false} />}
        
        </div>
        </>
)};

export default ItemList


const styles = {
    button: {
        backgroundColor: 'lightgreen',
        width:'220px',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 8px 4px #d3d3d3d1',
        borderRadius:'15px',
        fontFamily: 'sans-serif',
        fontSize:'32px',
        marginBottom:'10px',
        marginTop:'30px',
        marginLeft:'30px',
    },
    spinner: {
        alignItem: 'center,'
    },
}