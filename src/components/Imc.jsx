export default function Imc (){
    const [altura, setAltura] =("")
    const [peso, setPeso] = ("")

    function inputAltura (){
        setAltura(altura)
    }
    function inputPeso (){
        setPeso(peso)
    }
    function calculoPesoAltura (){
        inputAltura * inputAltura / inputPeso
        console.log(calculoPesoAltura)
    }
    

    return(
    <>
        <input 
        value={altura}
        onChange={inputAltura}
        placeholder="Insira a sua altura:" />
        <input 
        value={peso}
        onChange={inputPeso}
        placeholder="Insira o seu peso:"/>
        <button
        onClick={calculoPesoAltura}
        >calcular</button>
        <p>{calculoPesoAltura}</p>
    </>
    )
}