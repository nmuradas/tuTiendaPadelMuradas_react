import React, {useState, createContext, useEffect} from 'react';

export const contexto = createContext()
const { Provider } = contexto;


const CustomProvider = ({ children }) => {
    const [compras, setCompras] = useState([])
    console.log(compras)


    const [qtyProducts, setQtyProducts] = useState(0);


    const addCompras = (items) => {
        if (isInList(items.id)) {
            const found = compras.find(p => p.id === items.id);
            const index = compras.indexOf(found);
            const aux = [...compras, items];
            aux[index].qty += items.qty;
            setCompras(aux);
        } else {
            setCompras([...compras, items]);
        };}

    const obtenerCantidad = () => {
        let qty = 0;
        compras.forEach(items => qty += items.qty);
        setQtyProducts(qty);
    }

    useEffect(() => {
        obtenerCantidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compras])

    const removeCompras = (id) => {
        let item = compras.filter(items => items.id !== Number(id))[1];
        console.log(id)
        console.log(item)
    };

    const resetCompras = () => {
        setCompras([]);
        setQtyProducts(0)
    }


    const isInList = (id) => {
        console.log('hola')
    };




return (
        <Provider value={{compras, addCompras, removeCompras, resetCompras, qtyProducts}}>
            {children} 
        </Provider>
    )
}

export default CustomProvider