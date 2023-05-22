import Form from "./form.js"
import Citas from "./citas.js"
import { useState } from "react"

export default function App (){
    function TomarDatos(NuevaCita){}

    const[tarjetas, setTarjetas] = useState('')

    return(<Form onTomarDatos = {TomarDatos}/>)

}

