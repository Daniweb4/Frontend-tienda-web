import { useEffect } from "react";
import { useForm } from "react-hook-form";
import("../styles/formproveedor.css");
const UseForm = ({ addProveedor, isOpen, setIsOpen, editPov,   updateApi}) => {
  const { handleSubmit, register,reset } = useForm();
  useEffect(()=>{
    reset(editPov);
  },[editPov])
  const submit = (data) => {
    if (editPov) {
      updateApi('/proveedor', editPov.id,data)
      
    }
    addProveedor("/proveedor",data);
    
    reset({
      nme:'',
      contacto:''
     
  });
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={`contenti ${isOpen && "able"}`}>
      <form className="contenti-form" onSubmit={handleSubmit(submit)}>
        <div className="icon_close" onClick={handleClose}>
          <ion-icon className="closed" name="close-circle-outline"></ion-icon>
        </div><h1>Supplier Insert o Edit </h1>
        <div className="contenti-input">
          <label htmlFor="nme">Name</label>
          <input {...register("nme")} id="nme" type="text" />
        </div>
        <div className="contenti-input">
          <label htmlFor="contacto">Contact</label>
          <input {...register("contacto")} id="contacto" type="number" />
        </div>
        <div>
          <button className="btn-proveedor">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default UseForm;
