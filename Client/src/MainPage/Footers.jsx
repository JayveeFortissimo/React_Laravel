import styles from './Mains.module.css'
import logs from '../images/LG.png'

import i1 from '../images/f1.png'
import i2 from '../images/insta.png'
import i3 from '../images/YT.png'
import i4 from '../images/twiit.png'

const Footers = ({MDK}) => {


  return (
    <>
    
    <div className={styles.Footersie}> 


      <div className={styles.Names}>
            <h4>Alexander E. Madrigal Jr</h4>
            <h4>Jayvee C Maniquiz</h4>
            <h4>Karlo S Larin</h4>
            <h4>Paul Jyrus D.C Lopez</h4>
            <h4>Serg James Ruvic P. Garcia</h4>
      </div>


      <div className={styles.Logo}>
  <img src={logs} id={styles.log}/>
  <p>Copyright @ 2023 Dessert Heaven & Clock Work Development</p>
      </div>


      <div className={styles.goodz}>

       <p style={{ color:'white',cursor:'pointer' }} onClick={()=> MDK()}>Terms and Condition</p>
      <div>
  <img src={i1} alt=""  id={styles.ii}/>
      </div>

      <div>
      <img src={i2} alt=""  id={styles.ii}/>
      </div>

      <div>
      <img src={i3} alt=""  id={styles.ii}/>
      </div>

      <div>
      <img src={i4} alt=""  id={styles.ii}/>
      </div>
       
     

      </div>


    </div>
    
    </>
  )
}

export default Footers