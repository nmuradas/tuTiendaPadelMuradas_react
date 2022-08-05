import React, {useContext} from 'react';
import Swal from 'sweetalert2'
import {contexto} from '../../../Components/Context/Contexto'

const CompradorFormulario = ({finalizarCompra}) => {

  const { resetCompras } = useContext(contexto);


  const datosComprador = (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("Name")
    const apellido = document.getElementById("Apellido")
    const telefono = document.getElementById("Phone")
    const correo = document.getElementById("Email")
    const correoConf = document.getElementById("CorreoConf")
    const buyer = {"nombre":nombre.value, "apellido":apellido.value, "phone": telefono.value, "mail":correo.value}
    if (correo.value === correoConf.value && correo.value !== ""){
      finalizarCompra(buyer)
    }else{
      Swal.fire("Por favor complete su correo electrónico y Re-ingrese correctamente su correo")
    }  
  }

  

    return (  
      <>
          <form style={styles.forms} id="formulario" action="#!">
            <br /><br />
          <label><input type="text" id="Name" name="Name" placeholder='Ingrese su Nombre'/></label>
          <br />
          <br />
          <label><input type="text" id="Apellido" name="Apellido" placeholder='Ingrese su Apellido'/></label>
          <br />
          <br />
          <label><input type="number" id="Phone" name="Phone" placeholder='Ingrese su telefono'/></label>
          <br />
          <br />
          <label><input type="email" id="Email" name="Email" placeholder='Ingrese su E-mail'/></label>
          <br />
          <br />
          <label><input type="email" id="CorreoConf" name="CorreoConf" placeholder='Re-ingrese su E-mail'/></label>
          <br />
          <br />
          <input style={styles.btn} type="submit" value="COMPRAR" onClick={datosComprador} />
          <br />
          <br />
          <input style={styles.btn} type="submit" value="Vaciar Carrito" onClick={resetCompras} />
          <br />
          </form>
          </>
        )}   

export default CompradorFormulario


const styles = {
  forms: {

      alignItems: 'center',
      backgroundColor: 'lightGray',
      border: '1px solid gray',
      boxShadow: '2px 2px 8px 4px #d3d3d3d1',
      width:'420px',
      borderRadius:'15px',
      fontFamily: 'sans-serif',
      marginBottom:'10px',
      marginTop:'20px',
      marginLeft:'auto',
      marginRight:'auto',
  },
  btn: {
      backgroundColor:"lightGray",
      borderRadius: 5,
      borderColor: 'gray', 
      borderWidth: 2,
      borderStyle: 'solid', 
      fontWeight: 'bold', 
      marginBottom: '10px',
  },
}