import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/nav.css'
import Burger from './Burger'
const Nav = () => {
  const[cliked, setClicked]=useState(false)
  const handleClick=()=>{
    setClicked(!cliked)
    //console.log(cliked)
  }
  return (
    <div className='Nav'>
      <div className='title'>

        <h1>Tienda Web</h1>
        </div>
        <div className={`link-a ${cliked ? 'active': ''}`}>
        <Link to='/'>Home</Link>
         <Link to='/empleado'>Employees</Link>
        <Link to='/producto'>Products</Link>
        <Link to='/proveedor'>Suppliers</Link>
        </div>
        <div className="btn7">
      <Burger cliked={cliked} handleClick={handleClick}/>
      <div className={`initial ${cliked? ' active' : ''}`}></div>
      </div>
    </div>
  )
}

export default Nav
