import React, { useState, useEffect } from "react";


const Item = ({initialProducts})=> {


    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(initialProducts);
        }, 2000);   
    });
    
    const [productos, setProductos] = useState([]);
    
        useEffect(()=>{
            promesa.then((data)=>{
                setProductos(data)
            }).catch(()=>{
                console.log('Hubo un error');
            }).finally(()=>(
                console.log('Finalizada')
        ))
        },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <div style={styles.container}>
            {productos.map((producto,idx)=>{
                return <div key={idx} style={styles.cards}>
                        <h2 >{producto.title} </h2>
                        <img  src={producto.pictureUrl} alt="" width={380} height={455}/>
                        <p >{producto.description}</p>
                    </div>
            })}
            </div>

        </>
)};

export default Item

const styles = {
    cards: {
        backgroundColor: 'lightGreen',
        width:'420px',
        height:'600px',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 8px 4px #d3d3d3d1',
        borderRadius:'15px',
        fontFamily: 'sans-serif',
        marginBottom:'10px',
        marginTop:'20px',
    },

    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}