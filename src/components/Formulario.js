import React, {useState} from "react";

function Formulario (){

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    });

    function handleInputChange (e){
        console.log(e.target.value)
        setDatos({
            ...datos,
        [e.target.name] : e.target.value
        })
    }
    const enviarDatos = (e)=>{
        e.preventDefault();
        console.log(datos.nombre+" "+datos.apellido)
    }

    return (
        <>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingresar Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingresar Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}

                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre}  {datos.apellido}</h3>

        </>
    )
}

export default Formulario;