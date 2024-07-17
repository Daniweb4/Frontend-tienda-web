import { useState } from "react";
import '../style/modal.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'; // ícono de usuario habilitado
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
//import Modal from 'react-bootstrap/Modal';
//import { Stack } from "react-bootstrap";
const InforProveedor = ({ item, deleteApi, setIsOpen, setEditProv }) => {
  const [suplierHabilitado, setSuplierHabiltado]= useState(true)
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
   const toggleHabilitarSupliers =() =>{
    setSuplierHabiltado(!suplierHabilitado)
   }
  return (
    <>
      

<div className='btn1'> 
        <Button className='delete' disabled={!suplierHabilitado} onClick={()=>setIsModal(true)}><ion-icon name="trash-outline"></ion-icon></Button>
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
       <Button className='edit' disabled={!suplierHabilitado} onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></Button>
       <Button className='enable' onClick={toggleHabilitarSupliers}>
        {suplierHabilitado ? (
          <>
            <FontAwesomeIcon icon={faUserCheck} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faUserTimes} />
          </>
        )}
      </Button>
        </div> 
    </>

      );
    }

export default InforProveedor;
