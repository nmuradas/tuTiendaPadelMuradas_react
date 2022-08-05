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
          <form id="formulario" action="#!">
          <label><input type="text" id="Name" name="Name" placeholder='Ingrese su Nombre'/></label>
          <br />
          <label><input type="text" id="Apellido" name="Apellido" placeholder='Ingrese su Apellido'/></label>
          <br />
          <label><input type="number" id="Phone" name="Phone" placeholder='Ingrese su telefono'/></label>
          <br />
          <label><input type="email" id="Email" name="Email" placeholder='Ingrese su E-mail'/></label>
          <br />
          <label><input type="email" id="CorreoConf" name="CorreoConf" placeholder='Re-ingrese su E-mail'/></label>
          <br />
          <br />
          <input type="submit" value="COMPRAR" onClick={datosComprador} />
          <br />
          <input type="submit" value="Vaciar Carrito" onClick={resetCompras} />
          <br />
          </form>
          </>
        )}   

export default CompradorFormulario