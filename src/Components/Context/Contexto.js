import React, {useState, createContext, useEffect} from 'react';

export const contexto = createContext()
const { Provider } = contexto;


const CustomProvider = ({ children }) => {
    const [compras, setCompras] = useState([])
    console.log(compras)


    const [qtyProducts, setQtyProducts] = useState(0);

    const addCompras = (cart) => {
        setCompras([...compras, cart])
        setQtyProducts(qtyProducts + cart.qty)
        console.log(compras)
    }

    const obtenerCantidad = () => {
        console.log(qtyProducts)
    }

    useEffect(() => {
        obtenerCantidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compras])

    const removeCompras = () => {
        console.log('esta funcion eliminar un producto')
    }

    const resetCompras = () => {
        setCompras([]);
        setQtyProducts(0)
    }


    const IsInList = (id) => {
        console.log('esta funcion valida si el producto ya esta en la lista')
    }






return (
        <Provider value={{compras, addCompras, removeCompras, resetCompras, qtyProducts,}}>
            {children} 
        </Provider>
    )
}

export default CustomProvider