import React, { useState, useEffect } from "react";

import ItemList from './ItemList'
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting})=> {
    

    const initialProducts = [
        {id:0, title:'Paletas', description:'Paletas para todo tipo de jugador', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg', category: 'paletas'},
        {id:1, title:'Tubo x3 de Pelotitas', description:'Tubo de pelotas, para todo tipo de superficies', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_880616-MLA41893047565_052020-F.webp', category: 'pelotitas'},
        {id:2, title:'Cubregrip', description:'Encontrá lisos, rugosos y antiadherentes', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_648743-MLA49556228678_042022-F.webp', category: 'cubregrips'},
        {id:3, title:'Protector Superior', description:'Protector para la parte superior de tu paleta', price:90000, pictureUrl:'https://newsport.vteximg.com.br/arquivos/ids/1130692-1000-1000/03830-A.jpg?v=637466182847300000', category: 'protectores'},
    ]

    const { categoryId } = useParams();

    const [products, setProductos] = useState([]);
    const [enviar, setEnviar] = useState(true);
    
        useEffect(()=>{
            const filter = initialProducts.filter(item => item.category === categoryId)
            console.log(filter)
            console.log(categoryId)
            console.log(enviar)
            if (filter.length === 0){
            setProductos(initialProducts)
            setEnviar(!enviar)
            }
            else{
            setProductos(filter)
            setEnviar(!enviar)
            }
        },[categoryId]); // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <>
            <p style={{ backgroundColor : 'green' }}>{greeting}</p>
            <div>
            
            <br />
            <br />
            {enviar ? <div style={styles.button} ><ItemList products={products}/></div> : null}
            {enviar ? null : <div style={styles.button} ><ItemList products={products}/></div>}
            <br />
        
            </div>
        </>
)}

export default ItemListContainer

const styles = {
    button: {
        margin:'auto',

    },
}