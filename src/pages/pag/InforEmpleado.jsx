import { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../style/empleado.css'
import '../style/modal.css'
const InforEmpleado = ({item, setIsOpen, setEditEmpleado, deleteEmpledo}) => {
  const [isModal, setIsModal] = useState(false)
  const handleDelete= () =>{
    deleteEmpledo('/empleado', item.id)
    setIsModal(false);

  }
  const handleEdit= ()  =>{
    setIsOpen(true)
    setEditEmpleado(item)

  }
  return (
    <>
    <div className='btn1'> 
    <Button className='delete' onClick={()=>setIsModal(true)}><ion-icon name="trash-outline"></ion-icon></Button>
    {
        isModal && (
            
           <form className='modal'>
                <div className='card_modal'>
                 <h3 className='title_modal' >¿ Deseas eliminar a este proveedor.?</h3><br></br>
                <Button className='delete_user' onClick={()=>setIsModal(handleDelete)}>Delete</Button>
                <Button className='delete_user1' onClick={()=>setIsModal(false)}>Close</Button>
                </div>
            </form>
        
        

        )
        
    }
   
   <Button className='edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></Button>
    </div> 

    </>
  );
};

export default InforEmpleado;
