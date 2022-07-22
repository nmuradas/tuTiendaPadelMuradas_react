import React, { useState, useEffect} from "react";
import logo from '../../../assets/imagen_logo.jpeg';
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";


const Navbar = () => {
    const { categoryId } = useParams();
    const categorias = [
        {name:"Paletas", id:0, route:"/category/paletas"},
        {name:"Pelotitas", id:1, route:"/category/pelotitas"},
        {name:"Cubregrips", id:2, route:"/category/cubregrips"},
        {name:"Protectores", id:3, route:"/category/protectores"},
        {name:"Mi carrito", id:3, route:"/cart"},
        
    ];
    const [change, setShow] = useState(false);
    const refresh = ()=>{
        setShow(!change)
        console.log(change)
    }
    useEffect(()=>{
        console.log('Han habido cambios')
        setShow(!change)        
    },[categoryId]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <header style={styles.container}> 
            <Link to="/"> <img style={styles.imagenes} src={logo} alt="Logo" width={100} onClick={refresh}/> </Link>
            <h1>Tu Tienda Padel</h1>
            <nav style={styles.navStyle}>
                {categorias.map((category)=> <NavLink key={category.id} style={styles.link} to={category.route} onClick={refresh}>{category.name}</NavLink>)}
            </nav>
            <br />
            <Link to="/cart" onClick={refresh}><CartWidget /></Link> 
            
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
    
    link: {
        margin: '10px',
    },

}