import React from "react";
import '../hojas-de-estilo/tarea-formulario.css'

function TareaFormulario (props) {
    return (
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="texto"
            />
            <button className="tarea-boton">
                Agregar
            </button>
        </form>
    );
}

export default TareaFormulario;