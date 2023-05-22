import "./App.css";

function Form({onTomarDatos}) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const datos = new FormData(e.target)
    const NuevaCita = {
      nombreMascota: datos.get("mascota"),
      nombreDueño : datos.get("propietario"),
      fecha : datos.get("fecha"),
      hora : datos.get("hora"),
      sintomas: datos.get("sintomas")
    }
    onTomarDatos(NuevaCita)

    console.log(NuevaCita)
  }


  return (
    <div >
      <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre Mascota</label>
          <input
            id="nomMascota"
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
          />
          <label>Nombre Dueño</label>
          <input
            id="nomDueño"
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño de la mascota"
          />
          <label>Fecha</label>
          <input type="date" id="fecha" name="fecha" className="u-full-width"/>
          <label>hora</label>
          <input type="time" id="hora" name="hora" className="u-full-width" />
          <label>Sintomas</label>
          <textarea name="sintomas" id="sintomas" className="u-full-width"></textarea>
          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
