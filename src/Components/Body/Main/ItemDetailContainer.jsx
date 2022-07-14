import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=> {

    const initialProduct = [
        {id:0, title:'Paleta ADIDAS Training CTRL', 
        description:'La nueva Paleta ADIDAS Training CTRL es la alternativa perfecta para los jugadores que damandan CONTRDOL. Cumplirá con las expectativas del jugador que más sensaciones busca en una paleta de Padel. Su composición en FIBER GALSS y la nueva goma EVA SOFT PERFORMANCE, proporcionan las mejores sensaciones de juego. los SMART HOLES LINEAL, porporcionan la mejor durabilidad. MARCO: FIBER FRAME - SUPERFICIE: FIBER BRAIDED, NIVEL: INTERMEDIO, BALANCE: MEDIO, PESO: 360-375 gr, PUNTO DULCE: CENTRO. NO INCLUYE FUNDA',
        price:40000, 
        pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg',
        route:"/item/0"
    },
    {id:1, title:'Pelotitas', 
    description:'La nueva Paleta ADIDAS Training CTRL es la alternativa perfecta para los jugadores que damandan CONTRDOL. Cumplirá con las expectativas del jugador que más sensaciones busca en una paleta de Padel. Su composición en FIBER GALSS y la nueva goma EVA SOFT PERFORMANCE, proporcionan las mejores sensaciones de juego. los SMART HOLES LINEAL, porporcionan la mejor durabilidad. MARCO: FIBER FRAME - SUPERFICIE: FIBER BRAIDED, NIVEL: INTERMEDIO, BALANCE: MEDIO, PESO: 360-375 gr, PUNTO DULCE: CENTRO. NO INCLUYE FUNDA',
    price:40000, 
    pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg',
    route:"/item/1"
},
{id:2, title:'Cubregrips', 
description:'La nueva Paleta ADIDAS Training CTRL es la alternativa perfecta para los jugadores que damandan CONTRDOL. Cumplirá con las expectativas del jugador que más sensaciones busca en una paleta de Padel. Su composición en FIBER GALSS y la nueva goma EVA SOFT PERFORMANCE, proporcionan las mejores sensaciones de juego. los SMART HOLES LINEAL, porporcionan la mejor durabilidad. MARCO: FIBER FRAME - SUPERFICIE: FIBER BRAIDED, NIVEL: INTERMEDIO, BALANCE: MEDIO, PESO: 360-375 gr, PUNTO DULCE: CENTRO. NO INCLUYE FUNDA',
price:40000, 
pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg',
route:"/item/2"
},
{id:3, title:'Protectores', 
description:'La nueva Paleta ADIDAS Training CTRL es la alternativa perfecta para los jugadores que damandan CONTRDOL. Cumplirá con las expectativas del jugador que más sensaciones busca en una paleta de Padel. Su composición en FIBER GALSS y la nueva goma EVA SOFT PERFORMANCE, proporcionan las mejores sensaciones de juego. los SMART HOLES LINEAL, porporcionan la mejor durabilidad. MARCO: FIBER FRAME - SUPERFICIE: FIBER BRAIDED, NIVEL: INTERMEDIO, BALANCE: MEDIO, PESO: 360-375 gr, PUNTO DULCE: CENTRO. NO INCLUYE FUNDA',
price:40000, 
pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg',
route:"/item/3"
},
    ]
    const { itemId } = useParams();
    const [items, setItems] = useState([]);
    const [enviar, setEnviar] = useState(false);

        useEffect(()=>{
            
            const filter = initialProduct.filter(item => item.id === Number(itemId))
            console.log(filter)
            console.log(itemId)
            if (filter.length === 0){
            setItems(initialProduct)
            setEnviar(true)
            }
            else{
            setItems(filter)
            setEnviar(true)
            }
        },[itemId]); // eslint-disable-line react-hooks/exhaustive-deps

        

    return(
        <>
            <div>
            {enviar ? <ItemDetail items={items} /> : null}   
            </div>
        </>
)}

export default ItemDetailContainer