import "./App.css";
import { useState } from 'react'

function Form({ onTomarDatos }) {
  const [nombreMascota, setNombre] = useState('')
  const [dueño, setDueño] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const NuevaCita = {
      nombreMascota: nombreMascota,
      nombreDueño: dueño,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    }
    onTomarDatos(NuevaCita)
  }


  return (
    <div >
      <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre Mascota</label>
          <input
            id="nombreMascota"
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={(e) => setNombre(e.target.value)}
          />
          <label>Nombre Dueño</label>
          <input
            id="nombreDueño"
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño de la mascota"
            onChange={(e) => setDueño(e.target.value)}
          />
          <label>Fecha</label>
          <input type="date" id="fecha" name="fecha" className="u-full-width" onChange={(e) => setFecha(e.target.value)} />
          <label>hora</label>
          <input type="time" id="hora" name="hora" className="u-full-width" onChange={(e) => setHora(e.target.value)} />
          <label>Sintomas</label>
          <textarea name="sintomas" id="sintomas" className="u-full-width" onChange={(e) => setSintomas(e.target.value)}></textarea>
          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
