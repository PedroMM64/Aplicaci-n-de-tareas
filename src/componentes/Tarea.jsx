import React from "react";
import '../hojas-de-estilo/tarea.css';
import { AiFillDelete } from "react-icons/ai";

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div 
                className="tarea-texto"
                onClick={() => completarTarea(id)}>
                { texto }
            </div>
            <div 
            className="icono-contenedor"
            onClick={() => eliminarTarea(id)}>
                <AiFillDelete className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;