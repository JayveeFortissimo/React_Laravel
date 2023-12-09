import Jayvee from '../Items/Jayvee.module.css'
import { useNavigate } from 'react-router-dom'
import IMGS from '../Logows/logo.png'
const AdminS = () => {

    const backs = useNavigate(); 


  return (
   <>
   
   <div className={Jayvee.NV}>

<div className={Jayvee.GMI}>
  <img src={IMGS} alt="" id={Jayvee.IMGSI} />
</div>

<div className={Jayvee.LOLOPOP}>

<button className={Jayvee.pogi}  onClick={()=> backs('/')} >Back</button>

</div>


   </div>

   
   
   </>
  )
}

export default AdminS