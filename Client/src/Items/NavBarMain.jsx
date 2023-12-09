import {Link} from 'react-router-dom'
import Jayvee from './Jayvee.module.css'
import IMGS from '../Logows/logo.png'
import { useState } from 'react'

const NavBarMain = () => {


  const [see,sersee] = useState(false)


  return (
    <>
    
   <div className={Jayvee.NV}>

<div className={Jayvee.GMI}>
  <img src={IMGS} alt="" id={Jayvee.IMGSS} />
</div>

  <div className={Jayvee.ParentDiv}>
    <div><Link to="/After">Home</Link></div>
    <div><Link to="/HomeMain">Menu</Link></div>
    <div><Link to="/Contact">Contact Us</Link></div>
    <div><Link to="/AboutUs">About Us</Link></div>
    <div><Link to="/Ress">Recipe</Link></div>
    <div><Link to="/Profile">Profile</Link></div>
  </div>


{/*/////////////////Humburger Bar //////////////////////////*/}
<div className={Jayvee.MKL} onClick={()=>sersee(!see)}>
  <div className={Jayvee.CCC}></div>
  <div className={Jayvee.CCC}></div>
  <div className={Jayvee.CCC}></div>
</div>
  
   </div>

{

  see === true &&
   <div className={Jayvee.Upbar}>

    <div className={Jayvee.PPS}>
    <div><Link to="/After">Home</Link></div>
    <div><Link to="/HomeMain">Menu</Link></div>
    <div><Link to="/Contact">Contact Us</Link></div>
    <div><Link to="/AboutUs">About Us</Link></div>
    <div><Link to="/Ress">Recipe</Link></div>
    <div><Link to="/">Logout</Link></div>
    </div>


   </div>
}

    </>
  )
}

export default NavBarMain