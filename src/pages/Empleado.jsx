import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import crud from "../hook/crud";
import './style/empleado.css'
import UseEmployees from "../components/form/UseEmployees";
//import InforEmpleado from "./pag/InforEmpleado"
//import Table from "react-bootstrap/Table";
import PaginateEmpleado from "../components/PaginateEmpleado";
const url = "https://crud-tienda-web.onrender.com/api/v1";

const Empleado = () => {
  const [empleado, getEmpleado, addEmpleado,deleteEmpledo, updateEmpleado] = crud(url);
  const [isOpen, setIsOpen] = useState(false);
  const [editEmpleado, setEditEmpleado] = useState()

  useEffect(() => {
    getEmpleado("/empleado");
  }, []);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Nav />
      <h2>Employees</h2>
      <button className="btn-product" onClick={handleOpen}>
        Add new Employees
      </button>

        <UseEmployees
        addEmpleado={addEmpleado}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editEmpleado={editEmpleado}
        updateEmpleado={updateEmpleado}
        />
      
    
     
          <PaginateEmpleado 
                empleado={empleado}
                setEditEmpleado={setEditEmpleado}
                deleteEmpledo={deleteEmpledo}
                setIsOpen={setIsOpen}
                />
          
             
                
              
                
               
              
       
        
   
     
    </div>
  );
};

export default Empleado;
