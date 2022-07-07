import React, { useState, useEffect } from "react";
import { SpinnerRoundOutlined } from 'spinners-react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ()=> {

    const initialProduct = [
        {id:0, title:'Paleta', description:'Paleta Adidas training, blanda y con un amplio punto dulce.', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg'},
    ]

    const [items, setItems] = useState(true);
    const item = ()=>{
        setItems(!items)
        setTimeout(()=>{
            return(
                setItems(false)
            );
        }, 2000); 

    }

    return(
        <>
            <div>
            {items ? <SpinnerRoundOutlined enabled={true} /> : null }
            {items ? null :  <SpinnerRoundOutlined enabled={false} />}
            <ItemDetail initialProduct={initialProduct} />

            </div>
        </>
)}

export default ItemDetailContainer