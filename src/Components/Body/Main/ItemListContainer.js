import React, { useState, useEffect } from "react";
    import { db } from '../../../firebase/firebase'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting})=> {
    

    const { categoryId } = useParams();

    const [products, setProductos] = useState([]);
    const [enviar, setEnviar] = useState(true);
    
        useEffect(()=>{    const q = categoryId
            ? query(collection(db, 'categorias'), where('category', '==', categoryId))
            : collection(db, 'categorias');
            
        getDocs(q)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProductos(lista);
                setEnviar(!enviar)
                console.log(lista)
            })
            .catch(err => console.log(err))
            .finally(console.log('finalizado'))
    
    }, [categoryId]);// eslint-disable-line react-hooks/exhaustive-deps


    return(
        <>
            <p style={{ backgroundColor : 'lightGreen' }}>{greeting}</p>
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