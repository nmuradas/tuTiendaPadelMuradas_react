import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { db } from '../../../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore'


const ItemDetailContainer = ()=> {

    const { itemId } = useParams();
    const [items, setItems] = useState([]);
    const [enviar, setEnviar] = useState(true);

        useEffect(()=>{
            const productsCollection = collection(db, 'categorias');
            const refDoc = doc(productsCollection, itemId)
            getDoc(refDoc).then(result => {
                setItems({
                    id: result.id,
                    ...result.data(),                   
                })
            })
            .catch(err => console.log(err))
            .finally(() => setEnviar(false))
        }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

        

    return(
        <>
            {enviar ? null : <ItemDetail items={items} /> }   
        </>
)}

export default ItemDetailContainer