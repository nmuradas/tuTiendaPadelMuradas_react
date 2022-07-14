import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting})=> {
    

    const onAdd = (contador)=>{
        console.log(contador)
        localStorage.setItem("cantidad", contador)
        document.location.reload();
        alert("Usted ha agregado "+ contador + " elementos al carrito")
    }

    const [show, setShow] = useState(false);
    const cambio = ()=>{
        setShow(!show)
    }


    const initialProducts = [
        {id:0, title:'Paleta', description:'Paleta Adidas training, blanda y con un amplio punto dulce.', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg', category: 'paletas'},
        {id:1, title:'Tubo x3 de Pelotitas', description:'Tubo de pelotas Wilson. Incluye 3 unidades. Pelotas especiales para canchas de cemento indoor.', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_880616-MLA41893047565_052020-F.webp', category: 'pelotitas'},
        {id:2, title:'Cubregrip', description:'Cubregrio babolat liso, con antiadherente.', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_648743-MLA49556228678_042022-F.webp', category: 'cubregrips'},
        {id:3, title:'Protector Superior', description:'Protector para la parte superior de la paleta, evitar dañarla en algun golpe poco fortuito. Colores varios.', price:90000, pictureUrl:'https://newsport.vteximg.com.br/arquivos/ids/1130692-1000-1000/03830-A.jpg?v=637466182847300000', category: 'protectores'},
    ]

    const { categoryId } = useParams();

    const [products, setProductos] = useState([]);
    const [enviar, setEnviar] = useState(false);
    
        useEffect(()=>{
            const filter = initialProducts.filter(item => item.category === categoryId)
            console.log(filter)
            if (filter.length === 0){
            setProductos(initialProducts)
            setEnviar(true)
            }
            else{
            setProductos(filter)
            setEnviar(true)
            }
        },[categoryId]); // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <>
            <p style={{ backgroundColor : 'green' }}>{greeting}</p>
            <div>
            {show ? <ItemCount stock='6' initial='0' onAdd={onAdd}/> : <h1>Estás a un click de tu próxima compra</h1> }
            {show ? null : <button onClick={cambio}>Click para iniciar tu compra</button>}
            <br />
            <br />
            {enviar ? <div style={styles.button} ><ItemList products={products}/></div> : null}
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