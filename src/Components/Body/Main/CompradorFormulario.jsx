import React from 'react';


const CompradorFormulario = ({finalizarCompra}) => {

  const datosComprador = (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("Name")
    const correo = document.getElementById("Email")
    const telefono = document.getElementById("Phone")
    const buyer = {"nombre":nombre.value, "mail":correo.value, "phone": telefono.value}
    finalizarCompra(buyer)
  }

  

    return (  
      <>
          <form id="formulario" action="#!">
          <label><input type="text" id="Name" name="Name" placeholder='Ingrese su Nombre'/></label>
          <br />
          <label><input type="email" id="Email" name="Email" placeholder='Ingrese su E-mail'/></label>
          <br />
          <label><input type="number" id="Phone" name="Phone" placeholder='Ingrese su telefono'/></label>
          <br />
          <br />
          <input type="submit" value="COMPRAR" onClick={datosComprador} />
          <br />
          </form>
          </>
        )}   

export default CompradorFormulario