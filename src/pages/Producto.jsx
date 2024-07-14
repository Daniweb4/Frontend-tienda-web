import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import './style/product.css'
import crud from '../hook/crud'
import Infor from './pag/Infor'
import UseProductForm from '../components/form/UseProductForm'


const url="https://crud-tienda-web.onrender.com/api/v1"

const Producto = () => {
  const [editPoduct, setEditProduct] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [product, getProduct,addProduct, deleteApi, updateApi ]=crud(url)
  useEffect(()=> {
    getProduct('/product/')

  },[product]);
 
  const handleOpen = () => {
      setIsOpen(true)
  }
//console.log(product)
  return (
    <div className='bb'>
         <Nav/>
        <h2 className='text-product'>Products</h2>
      <div>
        <button className='btn-product' onClick={handleOpen}>Add new Products</button>
      </div>
        
        <UseProductForm
         addProduct={addProduct} 
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         editPoduct={editPoduct}
         updateApi={updateApi}
         />
        <div className='content'>
      {
        product?.map(products=> (
        <Infor 
        key={products.id}
        products={products}
        deleteApi={deleteApi}
        setEditProduct={setEditProduct}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        
        />

      ))
     
    }</div>

      
    </div>
  )
}

export default Producto
