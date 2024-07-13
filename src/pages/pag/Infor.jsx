import { useState } from "react";
import "../style/info.css";
import '../style/modal.css'
const Infor = ({ products, deleteApi,setIsOpen, setEditProduct }) => {
  const [isModal, setIsModal] = useState(false)

  const handleDelete= () =>{
    deleteApi('/product', products.id)
    setIsModal(false);

  }
  const handleEdit= ()  =>{
    setIsOpen(true)
    setEditProduct(products)

  }
  return (
    <section className="container">
      <div className="">
        <h3 className="name_product">
          <span>{products.name}</span>
        </h3>
        <figure className="figure">
          <img src={products.image} alt="" />
        </figure>
        <div className="list">
          <ul>
            <li>{products.descrip}</li>
            <li>{products.fecha_vencimiento}</li>
            <li>{products.proveedor?.nme}</li>
          </ul>
        </div>
        <div className="hr">
          {" "}
          <hr className="linea" />
        </div>

        <div className="btn_card">
          <button className='delete' onClick={()=>setIsModal(true)}><ion-icon name="trash-outline"></ion-icon>
          </button>
          {
            isModal && (
                
               <form className='modal'>
                    <div className='card_modal'>
                     <h3 className='title_modal' >¿ Deseas eliminar este usuario.?</h3><br></br>
                    <button className='delete_user' onClick={()=>setIsModal(handleDelete)}>Eliminar</button>
                    <button className='delete_user1' onClick={()=>setIsModal(false)}>Cerrar</button>
                    </div>
                </form>
            )   
        }
          <button className="btn_edit" onClick={handleEdit}> 
            <ion-icon name="create-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Infor;
