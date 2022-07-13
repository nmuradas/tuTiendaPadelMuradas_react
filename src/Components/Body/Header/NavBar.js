import React from "react";
import logo from '../../../assets/imagen_logo.jpeg';
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

    const categorias = [
        {name:"Paletas", id:0, route:"/category/paletas"},
        {name:"Indumentaria", id:1, route:"/category/indumentaria"},
        {name:"Equipamiento", id:2, route:"/category/equipamiento"},
    ]

    return (
        <header style={styles.container}> 
            <Link to="/"> <img style={styles.imagenes} src={logo} alt="Logo" width={100} /> </Link>
            <h1>Tu Tienda Padel</h1>
            <nav style={styles.navStyle}>
                {categorias.map((category)=> <NavLink key={category.id} style={styles.anchors} to={category.route}>{category.name}</NavLink>)}
            </nav>
            <br />
            <Link to="/cart"><CartWidget /></Link>     
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
        
        marginLeft: '5px',
    },
    
    anchors: {
        margin: '10px',
    },

}