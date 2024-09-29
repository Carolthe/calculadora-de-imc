import { useState } from "react"

export default function Imc (){
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [imc, setImc] = useState(null)

    // function inputAltura (){
    //     setAltura(altura)
    // }
    // function inputPeso (){
    //     setPeso(peso)
    // }
    function calculoPesoAltura (){
        const alturametros = altura
        const resultado = peso / ( alturametros * alturametros)
        setImc(resultado.toFixed(2))
    }
    

    return(
    <>
        <input 
        value={altura}
        onChange={(e)=> setAltura(e.target.value)}
        placeholder="Insira a sua altura:" />
        <input 
        value={peso}
        onChange={(e)=> setPeso(e.target.value)}
        placeholder="Insira o seu peso:"/>
        <button
        onClick={calculoPesoAltura}
        >calcular</button>
        <p>{imc}</p>
    </>
    )
}