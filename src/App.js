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
        const nuevasTarjetas=tarjetas.filter((tarjeta)=>tarjeta.id !== id)
        setTarjetas(nuevasTarjetas)
    }

    return (<>
        <Form onTomarDatos={TomarDatos} />

        {tarjetas.map((tarjeta) => (
            <div className="one-half column">
                <Citas key={tarjeta.id} onEliminarCita={()=>eliminarTarjeta(tarjeta.id)} datosAMostrar={tarjeta.contenido} />
            </div>
        ))}
    </>
    )

}

