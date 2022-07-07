import React from "react";


const ItemDetail = ({productos})=> {


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

export default ItemDetail

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