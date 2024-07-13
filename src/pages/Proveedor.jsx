import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import crud from "../hook/crud";
import UseForm from "../components/form/UseForm";
import "./style/proveedor.css";
import Table from "react-bootstrap/Table";
//import Button from "react-bootstrap/Button";
//import { Stack } from "react-bootstrap";
import InforProveedor from "./pag/InforProveedor";

const url = "http://localhost:8080/api/v1";
const Proveedor = () => {
  const [editPov, setEditProv] = useState()
  const [proveedor, getProveedor, addProveedor, deleteApi,  updateApi ] = crud(url);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProveedor("/proveedor");
  }, [proveedor]);
 // console.log(proveedor)
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Nav />
      <h2>Supplier</h2>
      <button className="btn-product" onClick={handleOpen}>
        Add new Supplier
      </button>
      <UseForm
        addProveedor={addProveedor}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        editPov={editPov}
        updateApi={ updateApi}
      />

      {/*Creamo una table para recoger la informcion alinsertar datoss
      a su vez creamos su estilo product.css*/}
      <div className="contentProvee">
        <Table className="Table" striped bordered hover size="sm">
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Contact</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proveedor.map((item) => (
              <tr key={item.id}>
                
                <td data-titulo="Name">{item.nme}</td>
                <td data-titulo="Contact">{item.contacto}</td>
                <td>
                  <InforProveedor
                  deleteApi={deleteApi}
                  item={item}
                  setIsOpen={setIsOpen}
                  setEditProv={setEditProv}
                  

                 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Proveedor;
