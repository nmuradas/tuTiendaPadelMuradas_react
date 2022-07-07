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
        },[]);

    return(
        <>
            <div>
            {productos.map((producto)=>{
                return <div style={styles.container}>
                        <h2 key={producto.id}>{producto.title} </h2>
                        <img key={producto.id} src={producto.pictureUrl} alt="" width={340} />
                        <p key={producto.id}>{producto.description}</p>
                    </div>
            })}
            </div>

        </>
)};

export default Item

const styles = {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        width:'420px',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 8px 4px #d3d3d3d1',
        borderRadius:'15px',
        fontFamily: 'sans-serif',
        marginBottom:'10px',
        marginTop:'20px',
    },
}