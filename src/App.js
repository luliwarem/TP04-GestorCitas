import Form from "./form.js"
import Citas from "./citas.js"
import { useState } from "react"

export default function App() {
    const [tarjetas, setTarjetas] = useState([])

    const TomarDatos = (NuevaCita) => {
        const nuevaTarjeta = {
            id: new Date().getTime(),
            contenido: NuevaCita
        }
        setTarjetas([...tarjetas, nuevaTarjeta])
        console.log(NuevaCita)
    }

    const eliminarTarjeta = (id) => {
        const nuevasTarjetas = tarjetas.filter((tarjeta) => tarjeta.id !== id)
        setTarjetas(nuevasTarjetas)
    }

    return (<>

        <div className="App container mt-5">
            <h1 className="text-center mb-4 titulo">Aplicación de Tarjetas</h1>
            <Form onTomarDatos={TomarDatos} />
            <div className="row justify-content-center mt-4">
                {tarjetas.map((tarjeta) => (
                    <Citas
                        key={tarjeta.id}
                        datosAMostrar={tarjeta.contenido}
                        onEliminarCita={() => eliminarTarjeta(tarjeta.id)}
                    />
                ))}
            </div>
        </div>
    </>
    )

}

