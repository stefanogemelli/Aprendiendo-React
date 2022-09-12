import React, {useState} from "react";

function Contador({inicial}){

    const [contador, setContador] = useState(inicial);
    
    const handleClick =()=>{
        setContador(prev=> prev+1)
    }
    
    const isEven = contador %2 ===0;
    
    return (
        <>
            <h3>Contador:</h3>
            <h2>{contador}</h2>
            <p>{isEven? 'es par':'es impar'}</p>
            <button onClick={handleClick}> 
                Incrementar
            </button>
            <button onClick={()=>{
                setContador(prevContador =>
                    prevContador-1);
            }}> 
                Decrementar
            </button>
        </>
    )
    
};

export default Contador;