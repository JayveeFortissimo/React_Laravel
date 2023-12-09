
import { useNavigate } from 'react-router-dom'
import Jayvee from '../Items/Jayvee.module.css'
import IMGS from '../Logows/logo.png'

const Nab = ({Alert}) => {

const logs = useNavigate();
const admin = useNavigate();

  return (
   <>

<div className={Jayvee.NV}>

<div className={Jayvee.GMI}>
  <img src={IMGS} alt="" id={Jayvee.IMGSI} />
</div>

<div className={Jayvee.LOLOPOP}>

<button className={Jayvee.pogi} onClick={()=> admin('/Admin')}>Admin</button>
              
              <button className={Jayvee.pogi} onClick={()=>{
                  Alert();
                 logs('/Login')
              }}>Customers</button>

</div>


   </div>

   
   </>
  )
}

export default Nab