import React, { useState, useEffect } from "react";
import { SpinnerRoundOutlined } from 'spinners-react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ()=> {

    const initialProduct = [
        {id:0, title:'Paleta ADIDAS Training CTRL', 
        description:'La nueva Paleta ADIDAS Training CTRL es la alternativa perfecta para los jugadores que damandan CONTRDOL. Cumplirá con las expectativas del jugador que más sensaciones busca en una paleta de Padel. Su composición en FIBER GALSS y la nueva goma EVA SOFT PERFORMANCE, proporcionan las mejores sensaciones de juego. los SMART HOLES LINEAL, porporcionan la mejor durabilidad. MARCO: FIBER FRAME - SUPERFICIE: FIBER BRAIDED, NIVEL: INTERMEDIO, BALANCE: MEDIO, PESO: 360-375 gr, PUNTO DULCE: CENTRO. NO INCLUYE FUNDA',
        price:40000, 
        pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg'
    },
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