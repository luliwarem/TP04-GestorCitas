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
            <Form onTomarDatos={TomarDatos} />
                {tarjetas.map((tarjeta) => (
                    <Citas
                        key={tarjeta.id}
                        datosAMostrar={tarjeta.contenido}
                        onEliminar={() => eliminarTarjeta(tarjeta.id)}
                    />
                ))}
        </div>
    </>
    )

}

