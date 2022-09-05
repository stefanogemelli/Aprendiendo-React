import React from "react";
import { useForm } from "react-hook-form";


 function FormHook() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data, e) =>{
     console.log(data);
     e.target.reset();
    }


  return (
    <>
    <form className=" form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Formulario con React-hook-form</h2>
      
      <input className="form-control my-2" {...register("example1",{required: true})} />
      {errors.example1 && <span className="form__span">Este campo es obligatorio</span>}
      
   
      <input className="form-control my-2"{...register("example2", { required: true , minLength: '5'})} />
      
      {errors.example2 && <span className="form__span">Este campo es obligatorio(minimo 5 caracteres)</span>}
      <br/>
      <input type="submit" className="btn btn-primary" />
    </form>
    </>

  );
  
}
export default FormHook;