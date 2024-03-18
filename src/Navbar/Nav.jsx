import React,{useState,useEffect} from 'react'
//import logo image
import Logo from '../Image/logo/logo-t.svg'
// import Link
import {Link} from 'react-router-dom'
//import icon
import {HiMenuAlt3} from 'react-icons/hi'
import {IoIosClose} from 'react-icons/io'
// import uselocation
import {useLocation} from 'react-router-dom'
function Nav() {
    const [open,setOpen] = useState(false)
    const [active,setActive] = useState(window.location.pathname.replace('/','')||'home')
    const location = useLocation()

    const Navbar = [
        {id:1,Title:'   Home',Path:'/',Name:''},
        {id:2,Title:'   Destination',Path:'/destination',Name:''},
        {id:3,Title:'   Crew',Path:'/crew',Name:''},
        {id:4,Title:'   Technology',Path:'/technology',Name:''},
    ]
    function close(){
        setOpen(false)
    }
    useEffect(()=>{
        setActive(location.pathname.replace('/','')  ? location.pathname.replace('/','') : 'home')
    },[location])

  return (

   <header>
  
    <nav  className={ `nav ${open?'show':''}`}>
        <div className='logo'>
            <img src={Logo} alt=''/>
        </div>
        <ul className={`ul ${active}`}>
            {
                Navbar.map((navbar)=>{
                    return(
                        <li onClick={close} className={navbar.Name} key={navbar.id}><Link to={navbar.Path}>{navbar.Title}</Link></li>
                    )
                })
            }

        </ul>
        <div onClick={() => setOpen(!open)} className='burger'>
            {
                open === false ?
                <HiMenuAlt3 className='burger-icon'/>:
                <IoIosClose className='burger-icon'/>
            }
           
        </div>

    </nav>
   </header>
 
  )
}

export default Nav