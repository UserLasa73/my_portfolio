import React, {useState, useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/SignatureLogo.svg'
import underline from '../../assets/teaCup.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = ()=> {
    const [menu,setMenu]=useState("");
    const menuRef=useRef();

    const openMenu = ()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu = ()=>{
        menuRef.current.style.right="-350px";
    }
    
    return (
        <div className='navbar'>
            <img onClick={openMenu} className='nav-mob-open' src={menu_open} alt="" />
            <AnchorLink className='anchor-link' offset={60} href="#Home"><img className='mylogo' src={logo} alt="" /></AnchorLink>
            <ul ref={menuRef} className="nav-menu">
                <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
                <li><AnchorLink className='anchor-link' offset={60} href="#Home"><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink>{menu==="Home"?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={60} href="#About"><p onClick={()=>setMenu("About")}>About</p></AnchorLink>{menu==="About"?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={60} href="#Services"><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={60} href="#Projects"><p onClick={()=>setMenu("Projects")}>Projects</p></AnchorLink>{menu==="Projects"?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={60} href="#Contact"><p className='menu-contact' onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={underline} alt="" />:<></>}</li>

            </ul>
            <AnchorLink className='anchor-link' offset={60} href="#Contact"><div className="nav-connect">Connect With me</div></AnchorLink>
        </div>
    ) 
}

export default Navbar