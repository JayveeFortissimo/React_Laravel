import React from 'react'
import Jayvee from '../Items/Jayvee.module.css'
import IMGS from '../Logows/logo.png'
import {useNavigate} from 'react-router-dom'

const LogoutsC = () => {

    const Mainsd = useNavigate();
  return (
  <>
  
   
  <div className={Jayvee.NV}>

<div className={Jayvee.GMI}>
  <img src={IMGS} alt="" id={Jayvee.IMGSI} />
</div>

<div className={Jayvee.LOLOPOP}>

<button className={Jayvee.pogi}  onClick={()=> Mainsd('/HomeMain')} >Back</button>

</div>


   </div>

  
  </>
  )
}

export default LogoutsC