import React, {useState, createContext, useEffect} from 'react';

export const contexto = createContext()
const { Provider } = contexto;


const CustomProvider = ({ children }) => {
    const [compras, setCompras] = useState([])
    const [qtyProducts, setQtyProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const obtenerCantidad = () => {
        let qty = 0;
        compras.forEach(items => qty += items.qty);
        setQtyProducts(qty);
        let price = 0
        compras.forEach(items => price += items.price * items.qty);
        setTotalPrice(price);
    }


    useEffect(() => {
        obtenerCantidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compras])

    const addCompras = (items) => {
        if (isInList(items.id)) {     
        const found = compras.find(p => p.id === items.id);
        const index = compras.indexOf(found);
        const aux = [...compras];
        aux[index].qty += items.qty;
        console.log(typeof(items.id))
        setCompras(aux);
    } else {
        setCompras([...compras, items]);
        console.log(items.id)
        console.log(typeof(items.id))
    };
}



    const removeCompras = (id) => {
        setCompras(compras.filter(items => items.id !== id));
        console.log(typeof(id))
        console.log('pasa algo')
    };

    const resetCompras = () => {
        setCompras([]);
        setQtyProducts(0)
    }


    const isInList = (id) => {
        return compras.some(items => items.id === id);
    };




return (
        <Provider value={{compras, addCompras, removeCompras, resetCompras, qtyProducts, totalPrice}}>
            {children} 
        </Provider>
    )
}

export default CustomProvider