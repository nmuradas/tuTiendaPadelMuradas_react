import React,{useState} from "react";


const Cart = () => {
    const [refresh,setRefresh] = useState(true)
    const refreshh = ()=>{   
        setRefresh(!refresh)  
        document.location.reload()  
        setRefresh(!refresh) 
    }



    return (
        <div>
            CART
            <br />
            {refresh}
           <button onClick={refreshh}>Enviar tus productos al carrito</button>
        </div>

        
    )
}

export default Cart