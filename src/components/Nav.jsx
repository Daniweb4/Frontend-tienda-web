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
        <a><Link to='/'>Home</Link></a>
        <a> <Link to='/empleado'>Employees</Link></a>
        <a><Link to='/producto'>Products</Link></a>
        <a><Link to='/proveedor'>Suppliers</Link></a>
        </div>
        <div className="btn7">
      <Burger cliked={cliked} handleClick={handleClick}/>
      <div className={`initial ${cliked? ' active' : ''}`}></div>
      </div>
    </div>
  )
}

export default Nav
