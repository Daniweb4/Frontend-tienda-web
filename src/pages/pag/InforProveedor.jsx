import { useState } from "react";
import '../style/modal.css'
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import { Stack } from "react-bootstrap";
const InforProveedor = ({ item, deleteApi, setIsOpen, setEditProv }) => {
  const [isModal, setIsModal] = useState(false);
  const handleDelete = () =>{
    deleteApi("/proveedor", item.id);  
     setIsModal(false);
  }
  const handleEdit = () =>{
    setIsOpen(true)
    setEditProv(item)
  }
//console.log(item)
 // const handleClose = () =>{
  //   setIsModal(false);
 // }

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
    }

export default InforProveedor;
