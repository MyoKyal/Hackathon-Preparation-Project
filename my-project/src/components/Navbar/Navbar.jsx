import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>

      <img src={assets.logo} alt="" className='logo' />

      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("about")} className={menu==="about" ? "active" : ""}>About</li>
        <li onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}>Contact</li>
      </ul>

     <div className="navbar-right">
        <img src={assets.account_logo} alt="" className='account-logo' />
        <div className="navbar-search-icon">
            <img src={assets.search_logo} alt="" className='search-logo' />
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
     </div>

    </div>
  )
}

export default Navbar
