import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import crud from "../hook/crud";
import './style/empleado.css'
import UseEmployees from "../components/form/UseEmployees";
import InforEmpleado from "./pag/InforEmpleado"
import Table from "react-bootstrap/Table";
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
      
    
      <div className="contentEmployees">
        <Table className="Table" striped bordered hover size="sm">
          <thead>
            <tr>
            
              <th>Name</th>
              <th>Last</th>
              <th>Correo</th>
              <th>Direction</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {empleado.map((item) => (
              <tr key={item.id}>
              
                <td data-titulo="Nombre">{item.name}</td>
                <td data-titulo="Last">{item.last}</td>
                <td data-titulo="Email">{item.correo}</td>
                <td data-titulo="Direction">{item.direccion}</td>
                <td> 
                <InforEmpleado
                item={item}
                deleteEmpledo={deleteEmpledo}
                setEditEmpleado={setEditEmpleado}
                setIsOpen={setIsOpen}
                /></td>
                
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Empleado;
