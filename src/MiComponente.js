import React from 'react';

const MiComponente = () => {

    const manejarClick = (event) => {
        console.dir('Click en botón')
        event.stopPropagation()
    }
    const manejarCambio = (event) => {
        console.dir(event.target) 
    }

    const prevenido = (event)=>{
        console.log('Prevenido')
        event.preventDefault()
    }

    const manejarClickDiv = ()=>{
        console.log('Click en Div')
    }

    return (
        <div onClick={manejarClickDiv}>
            <button onClick={manejarClick}>Click</button>
            <input type="text" onChange={manejarCambio} />
            <a onClick={prevenido} href="http://google.com">Ir a Google</a>
        </div>
    );
}

export default MiComponente