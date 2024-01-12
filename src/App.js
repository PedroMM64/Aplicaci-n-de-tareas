import './App.css';
import TareaFormulario from './componentes/TareaFormulario';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario />
        <Tarea />
      </div>
    </div>
  );
}

export default App;