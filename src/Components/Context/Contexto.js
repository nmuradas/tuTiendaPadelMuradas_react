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
        compras.forEach(items => price += items[0].price * items.qty);
        setTotalPrice(price);
    }


    useEffect(() => {
        obtenerCantidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compras])

    const addCompras = (items) => {
        if (isInList(items[0].id)) {
        const aux = [...compras];
        const found = aux.find(p => Number(p[0].id) === items[0].id);
        console.log(typeof(items[0].id))
        found.qty += items.qty;
        setCompras(aux);
    } else {
        setCompras([...compras, items]);
        console.log(items[0].id)
        console.log(typeof(items[0].id))
    };
}



    const removeCompras = (id) => {
        setCompras(compras.filter(items => items[0].id !== Number(id)));
        console.log(typeof(id))
        console.log('pasa algo')
    };

    const resetCompras = () => {
        setCompras([]);
        setQtyProducts(0)
    }


    const isInList = (id) => {
        return compras.some(items => items[0].id === id);
    };




return (
        <Provider value={{compras, addCompras, removeCompras, resetCompras, qtyProducts, totalPrice}}>
            {children} 
        </Provider>
    )
}

export default CustomProvider