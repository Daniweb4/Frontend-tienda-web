/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import InforEmpleado from '../pages/pag/InforEmpleado';
import Table from "react-bootstrap/Table";
import '../pages/style/home.css'
import '../components/styles/paginacion.css'
const itemsPerPage = 3;


const PaginateEmpleado = ({empleado, setEditEmpleado,setIsOpen,deleteEmpledo}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // eslint-disable-next-line react/prop-types
    setCurrentItems(empleado.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(empleado.length / itemsPerPage));
  }, [itemOffset, empleado]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % empleado.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
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
        
       
          {currentItems.map((item, index) => (
               
               < tr key={index}>
               
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
          <div>
              <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination"
        activeClassName="active"
      /></div>
          </div>

    </div>
  )
}

export default PaginateEmpleado
