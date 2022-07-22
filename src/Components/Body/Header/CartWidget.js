import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {contexto} from '../../Context/Contexto'



const CartWidget = () => {

    const { qtyProducts } = useContext(contexto);

    return (
        <>
        {qtyProducts > 0 ?
        <div style={styles.container}> 
            <ShoppingCartIcon color="success" sx={{ fontSize: 40}}/>
            <>{ qtyProducts }</>
        </div> : null}
    </>)
}

export default CartWidget

const styles = {
    container: {
        display: 'flex',
        marginRight:15,
        backgroundColor: 'darkGray',
        alignItems: 'center',
        padding: 10,
        fontWeight: 'bolder',
    },

}