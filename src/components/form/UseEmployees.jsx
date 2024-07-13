import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "../styles/formemployees.css";
const UseEmployees = ({addEmpleado,setIsOpen,isOpen, editEmpleado, updateEmpleado}) => {
    const { handleSubmit, register, reset } = useForm();
    useEffect(()=>{
        reset(editEmpleado)

    },[editEmpleado])
    const submit = (data)  =>{
        if (editEmpleado) {
            updateEmpleado('/empleado', editEmpleado.id, data)
            
        }
        addEmpleado('/empleado', data)
        reset({
            name:"",
            last:"",
            correo:"",
            direccion:""

        })
    }
    const handleClose = () => {
        setIsOpen(false);
      };
  return (
    <div  className={`contenti ${isOpen && "able"}`}>
        <form action="" onSubmit={handleSubmit(submit)}>
        <div className="icon_close" onClick={handleClose}>
          <ion-icon className="closed" name="close-circle-outline"></ion-icon>
        </div><h1>Employees Insert o Edit </h1>
            <div className='data'>
                <label htmlFor="name">Name</label>
                <input {...register("name")} type="text" />
            </div>
            < div className='data'>
                <label htmlFor="last">last</label>
                <input {...register("last")} type="text" />
            </div>
            <div className='data'>
                <label htmlFor="direccion">Dirección</label>
                <input {...register("direccion")} type="text" />
            </div>
            <div className='data'>
                <label htmlFor="correo">Email</label>
                <input {...register("correo")} type="text" />
            </div>
            <div className='data'>
                <label htmlFor="image">Foto</label>
                <input {...register("image")} type="text" />
            </div>
            <button  className="btn-employees">Guardar</button>
        </form>
      
    </div>
  )
}

export default UseEmployees
