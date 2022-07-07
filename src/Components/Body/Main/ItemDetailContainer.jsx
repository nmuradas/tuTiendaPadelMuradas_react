import React, { useState, useEffect } from "react";
import { SpinnerRoundOutlined } from 'spinners-react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ()=> {

    const initialProduct = [
        {id:0, title:'Paleta', description:'Paleta Adidas training, blanda y con un amplio punto dulce.', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg'},
    ]

    const getItem = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(initialProduct);
        }, 2000);   
    });
    
    const [productos, setProductos] = useState([]);
    
        useEffect(()=>{
            getItem.then((data)=>{
                setProductos(data)
            }).catch(()=>{
                console.log('Hubo un error');
            }).finally(()=>(
                console.log('Finalizada')
        ))
        },[]);


        const [state, setState] = useState(true)
        setTimeout(()=>{
            return(
                setState(false)
            );
        }, 2000); 
    


    return(
        <>
            <div>
            {state ? <SpinnerRoundOutlined enabled={true} /> : null }
            {state ? null :  <SpinnerRoundOutlined enabled={false} />}
            <ItemDetail productos={productos} />

            </div>
        </>
)}

export default ItemDetailContainer