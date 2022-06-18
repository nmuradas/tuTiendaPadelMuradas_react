import React from "react";
import logo from '../../../assets/imagen_logo.jpeg';
import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <header style={styles.container}> 
            <img style={styles.imagenes} src={logo} alt="Logo" />
            <h1>Tu Tienda Padel</h1>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} href="#!">Categoría 1</a>
                <a style={styles.anchors} href="#!">Categoría 2</a>
                <a style={styles.anchors} href="#!">Categoría 3</a>
            </nav>
            <br />
            <CartWidget />
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