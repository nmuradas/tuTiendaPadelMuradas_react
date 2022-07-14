import React, { useState, useEffect } from "react";
import Item from './Item'
import { SpinnerCircular} from 'spinners-react';



const ItemList = ({products})=>  {

    const [state, setState] = useState(true)
    setTimeout(()=>{
        return(
            setState(false)
        );
    }, 2000); 

    const initialCategorias = [
    {id:0, title:'Bienvenidos',},
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



return(
    <>
        <div>
        {categorias.map((categoria)=>(
                    <div style={styles.button}  key={categoria.id} >{categoria.title} </div>
        ))}
        </div>
        <div>
        <Item products={products}/> 
        {state ? <SpinnerCircular enabled={true} /> : null }
        {state ? null : <SpinnerCircular enabled={false} />}
        
        </div>
        </>
)};

export default ItemList


const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: 'lightGray',
        width:'220px',
        fontFamily: 'sans-serif',
        fontSize:'32px',
        margin:'auto',

    },
}