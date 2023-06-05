import React from 'react';
import "./App.css";

 

const Cita = ({ datosAMostrar, onEliminar }) => {

  const handleEliminar = () => {
    onEliminar();
  };

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      <div className="cita">

      <p>Mascota: <span>{datosAMostrar.nombreMascota}</span></p>

        <p>Dueño: <span>{datosAMostrar.nombreDueño}</span></p>

        <p>Fecha: <span>{datosAMostrar.fecha}</span></p>

        <p>Hora: <span>{datosAMostrar.hora}</span></p>

        <p>Sintomas: <span>{datosAMostrar.sintomas}</span></p>

      <button onClick={handleEliminar}>Eliminar</button>
      </div>

    </div>

  );

};

 

export default Cita;