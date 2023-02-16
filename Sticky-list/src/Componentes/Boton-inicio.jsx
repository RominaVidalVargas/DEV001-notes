import React from "react";
function BotonInicio() {
    const validarClick = () => {
        console.log('Me hiciste click')
    }
    return (
        <button onClick={validarClick} type="button">Inciar sesión con Google (2da-opción)</button>
    );
};
export default BotonInicio;