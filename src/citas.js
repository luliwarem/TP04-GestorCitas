import "./App.css";

function Citas(datosAMostrar) {
  const handleEliminar = () =>{
    
  }
  console.log(datosAMostrar)

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      <div className="cita">
        <p>Mascota: <span>{datosAMostrar.nombreMascota}</span></p>
        <p>Dueño: <span>{datosAMostrar.nombreDueño}</span></p>
        <p>Fecha: <span>{datosAMostrar.fecha}</span></p>
        <p>Hora: <span>{datosAMostrar.hora}</span></p>
        <p>Sintomas: <span>{datosAMostrar.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={handleEliminar()}>Eliminar ×</button>
      </div>
    </div>
  );
}

export default Citas;
