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
    {id:1, title:'Pelotitas Padel - Tenis', 
    description:'Tubo de pelotas Wilson Championship, extra durabilidad. Ideal para juegos màs largos, en todas las superficies. Mejor durabilidad y rendimiento gracias al filtro Dura-Weave',
    price:3500, 
    pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_880616-MLA41893047565_052020-F.webp',
    route:"/item/1"
},
{id:2, title:'Cubregrips', 
description:'El cubregrip Babolat My Grip, posee una textura adherente para un agarre perfeto del mango de la paleta. En la superficie está grabado el modelo "My Overgrip" y tiene pequeñas perforaciones para mejorar absorciñon de la transpiración de la mano. Sus colore divertidos te harán sobresalir de tus adversarios y su atractivo precio, te seducirá' ,
price:650, 
pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_648743-MLA49556228678_042022-F.webp',
route:"/item/2"
},
{id:3, title:'Protectores', 
description:'Largo:42 cm - Protegé tu paleta de golpes desagradables. Extedé la durabilidad de la misma con los protectos SixSero y disfrutá al máximo tus partidos sin preocupaciones ',
price:2590, 
pictureUrl:'https://newsport.vteximg.com.br/arquivos/ids/1130692-1000-1000/03830-A.jpg?v=637466182847300000',
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
            console.log(initialProduct)
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