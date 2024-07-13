import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import crud from "../../hook/crud";
import "../styles/form.css";

const url = "https://backend-tienda-web.onrender.com";
const UseProductForm = ({ addProduct, isOpen, setIsOpen, editPoduct, updateApi }) => {
  const { handleSubmit, register, reset } = useForm();
  const [apiData, getSelect] = crud(url);
  const [selectOption, setSelectOption] = useState("");

  useEffect(() => {
    getSelect("/proveedor/");
  }, []);
  useEffect(() => {
    reset(editPoduct);
  }, [editPoduct]);

  const submit = (data) => {
    const productData = {
      ...data,
      proveedorId: selectOption,
      //nme: selectOption // Asumiendo que el campo en la base de datos para el proveedor es 'proveedorId'
    };
    if (editPoduct) {
      updateApi('/product', editPoduct.id, productData)
    }
    addProduct("/product", productData);
    //postApi('/product',  productData);
    
    reset({
      name:"",
      descrip:"",
      fecha_vencimiento:"",
      image:"",

    });
  };
  const handleOnChnge = (event) => {
    //event.preventDefault()
    setSelectOption(event.target.value);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`form_background ${isOpen && "able"}`}>
      <form className="container_form" onSubmit={handleSubmit(submit)}>
        <div className="icon_close" onClick={handleClose}>
          <ion-icon className="closed" name="close-circle-outline"></ion-icon>
        </div>
        <h1>Product Insert o Edit </h1>

        <div className="data">
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" />
        </div>
        <div className="data">
          <label htmlFor="descrip">Description</label>
          <input {...register("descrip")} type="text" />
        </div>
        <div className="data">
          <label htmlFor="fecha_vencimiento">Expiration Date</label>
          <input {...register("fecha_vencimiento")} type="text" />
        </div>
        <div className="data">
          <label htmlFor="image">Image</label>
          <input {...register("image")} type="text" />
        </div>
        <div className="data">
          <label htmlFor="nme">Suppliers</label>
          <select onChange={handleOnChnge}>
            <option value="">Seleccione</option>
            {apiData?.map((select) => {
              return (
                <option key={select.id} value={select.id}>
                  {select.nme}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn-form">Registro</button>
      </form>
    </div>
  );
};

export default UseProductForm;
