import React, { useState, useEffect } from "react";
import { SpinnerRoundOutlined } from 'spinners-react';


const Item = ()=> {


    const initialProducts = [
        {id:0, title:'Paleta', description:'Paleta Adidas training, blanda y con un amplio punto dulce.', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg'},
        {id:1, title:'Tubo x3 de Pelotitas', description:'Tubo de pelotas Wilson. Incluye 3 unidades. Pelotas especiales para canchas de cemento indoor.', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_880616-MLA41893047565_052020-F.webp'},
        {id:2, title:'Cubregrip', description:'Cubregrio babolat liso, con antiadherente.', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_648743-MLA49556228678_042022-F.webp'},
        {id:3, title:'Protector Superior', description:'Protector para la parte superior de la paleta, evitar dañarla en algun golpe poco fortuito. Colores varios.', price:90000, pictureUrl:'https://newsport.vteximg.com.br/arquivos/ids/1130692-1000-1000/03830-A.jpg?v=637466182847300000'},
    ]
    
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
            {productos.map((producto,i)=>{
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