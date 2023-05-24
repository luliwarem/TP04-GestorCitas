import Form from "./form.js"
import Citas from "./citas.js"
import { useState } from "react"

export default function App (){
    function TomarDatos(NuevaCita){}
    const[NuevaCita, setNuevaCita] = useState('')


    const[tarjetas, setTarjetas] = useState([])

    setTarjetas([...tarjetas,NuevaCita])

    return(<>
    <Form onTomarDatos = {TomarDatos}/>

    {tarjetas.map((tarjeta)=>(
        <div className="one-half column">
        <Citas 
        onContenido={tarjeta.contenido}
        />
        </div>
    ))}
    </>
    
    )

}

