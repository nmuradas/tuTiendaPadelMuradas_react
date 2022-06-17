import React from "react";
import logo from '../../../assets/imagen_logo.jpeg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <header style={styles.container}> 
            <img style={styles.imagenes} src={logo} alt="Logo" />
            <h1>Tienda Tienda Padel</h1>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} href="">Categoría 1</a>
                <a style={styles.anchors} href="">Categoría 2</a>
                <a style={styles.anchors} href="">Categoría 3</a>
            </nav>
            <br />
        
            <ShoppingCartIcon color="success" sx={{ fontSize: 40}}/>
        </header>
    );
}

export default Navbar

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    
    navStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    
    imagenes: {
        width: '6%',
    },
    
    anchors: {
        margin: '10px',
    },

}