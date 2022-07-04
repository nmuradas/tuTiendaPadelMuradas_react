import React, { useState, useEffect } from "react";


const Item = ()=> {

    const initialProducts = [
        {id:0, title:'Paleta', description:'eee', price:90000, pictureUrl:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/paleta-de-padel-adidas-training-ctrl-57920046-125040rk6cj5001-2.jpg'},
        {id:1, title:'Tubo x3 de Pelotitas', description:'eee', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_880616-MLA41893047565_052020-F.webp'},
        {id:2, title:'Cubregrip', description:'eee', price:90000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_648743-MLA49556228678_042022-F.webp'},
        {id:3, title:'Protector Superior', description:'eee', price:90000, pictureUrl:'https://newsport.vteximg.com.br/arquivos/ids/1130692-1000-1000/03830-A.jpg?v=637466182847300000'},
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
            }).finally(()=>{
                return console.log("Finalizó la carga")
            })
        },[]);
    

    return(
        <>
            <div>
            {productos.map((producto)=>{
                return <div>
                        <h2 key={producto.id}>{producto.title} </h2>
                        <img src={producto.pictureUrl} alt="" />
                    </div>
            })}
            </div>
        </>
)};

export default Item