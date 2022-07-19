import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = () => {

    return (
        <div style={styles.container}> 
            <ShoppingCartIcon color="success" sx={{ fontSize: 40}}/>
            <>{localStorage.getItem("cantidad")}</>
        </div>
    );
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