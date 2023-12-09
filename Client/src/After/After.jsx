import React from 'react'
import styles from '../MainPage/Mains.module.css'
import NavBarMain from '../Items/NavBarMain';
import Cake from '../ImageMains/Cake1.png'
import CupCake from '../ImageMains/CupCake1.png'
import Pancake from '../ImageMains/Pancake1.png'
import Drings from '../ImageMains/Drinks1.png'
import Donut from '../ImageMains/Donut1.png'
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import Aos from 'aos'
import Footers from '../MainPage/Footers';

const After = () => {

  const [isChecked,setChecked] = useState(false);
 
  const shows = () =>{
    setChecked(!isChecked)
  }

    const menu = useNavigate();
    const alerts = () =>{
      let timerInterval;
      Swal.fire({
        title: "<h3>Japks Sweet Desserts</h3>",
        html: "Please<b></b> Wait.",
        timer: 1900,
        timerProgressBar: true,
      
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
     }
  
      useEffect(()=>{
    Aos.init({duration:2000});
      },[])

      const [md,setmd] = useState('Modals');

        const MDD = () =>{
            setmd('Modal')
        }


  return (
  <>

  <NavBarMain />  
  
  <div className={styles.imgsie} data-aos="zoom-in-up" >

  <div className={styles.Textie}>
  <h1>Welcome! <br/>DESSERT HAVEN: <br/>Where Blissful <br/>Bites Awaits</h1>

  <div className={styles.bnb}>
    <button onClick={()=>{
        alerts()
       menu('/HomeMain')
    }}>Order Now</button>
  </div>

  </div>
 </div>


 {
  md === 'Modal' &&
 <div className="modals">

<div className="overlays">

  <div className="modal-contents">
    <h2> Terms and Conditions</h2>

<div className='MKLL'>


  <div >
        <h3> Acceptance of Terms</h3>
        <p style={{ fontSize:'0.8rem' }}>By accessing and using SweetDesserts, you agree to be bound by these terms and <br />conditions. If you do not agree with any part of these terms, you may not use our website. </p>
  </div>

  <div>
        <h3>User Eligibility</h3>
        <p style={{ fontSize:'0.8rem' }}>You must be 12 or older to use Your Sweet Dessert Website. By using the  <br />website, you confirm that you meet this eligibility requirement </p>
  </div>
    
  <div>
        <h3>Website Access</h3>
        <p style={{ fontSize:'0.8rem' }}>We grant you a limited, revocable, and non-exclusive license to access and use Your Sweet Dessert Website for personal use. <br />We reserve the right to restrict access to certain areas of the website, or the entire website, at our discretion. </p>
  </div>

  <div>
        <h3>User Accounts</h3>
        <p style={{ fontSize:'0.8rem' }}>If you choose to create a user account on Your Sweet Dessert Website, you are responsible for maintaining the confidentiality of your account and password. <br />You agree to accept responsibility for all activities that occur under your account. </p>
  </div>

  <div>
        <h3> Content Usage</h3>
        <p style={{ fontSize:'0.8rem' }}>ll content on Sweet Dessert Website, including text, images, and graphics, is the property of our company and is protected by intellectual property laws <br /> You may not copy, reproduce, distribute, or modify any content without our express written consent.</p>
  </div>

  <div>
        <h3>Privacy Policy</h3>
        <p style={{ fontSize:'0.8rem' }}>Please review our Privacy Policy link to privacy policy to understand how we collect, use, and safeguard your personal information. </p>
  </div>

  <div>
        <h3>Cookies</h3>
        <p style={{ fontSize:'0.8rem' }}>Our Website may use cookies to enhance user experience. By using the website, you consent to the use of cookies in accordance with our Privacy Policy.</p>
  </div>

  <div style={{ display:'flex',alignItems:'center'}}>
      <form>
        <input type="checkbox" checked={isChecked}  onChange={shows}/>
        <span style={{ fontSize:'0.8rem' }}> Check this if you agree of our Terms and conditions</span>
      </form>
  </div>
{
  isChecked &&
  <div className='KAPE'>
    <button onClick={()=>setmd('Modals')}>Proceed To Website</button>
  </div>
}

  </div>


  </div>

</div>

 </div>
}

<div className={styles.Desert} data-aos="zoom-in-up">

  <div className={styles.texts}>
    <h1>DESSERT HEAVEN </h1>
    <h1>MENU</h1>
    <p>Sweet Temptions, Delightful Creations: </p>
    <p>Welcome to Desssert Paradise</p>
  </div>


  <div className={styles.options}>

    <div data-aos="fade-right">
   <h2>CAKE</h2>
<img src={Cake} alt="" />
<button onClick={()=>{
  alerts()
  menu('/HomeMain')
}}>View</button>
    </div>

    <div data-aos="fade-right">
    <h2>CUPCAKE</h2>
    <img src={CupCake} alt="" />
      <button onClick={()=>{
  alerts()
  menu('/HomeMain')
}}>View</button>
    </div>

    <div data-aos="zoom-in-up">
    <h2>PANCAKE</h2>

    <img src={Pancake} alt="" />
    <button onClick={()=>{
  alerts()
  menu('/HomeMain')
}}>View</button>
    </div>

    <div data-aos="fade-left">
    <h2>DONUT</h2>
    <img src={Donut} alt="" />
    <button onClick={()=>{
  alerts()
  menu('/HomeMain')
}}>View</button>
    </div>

    <div data-aos="fade-left">
    <h2>DRINKS</h2>
    <img src={Drings} alt="" />
    <button onClick={()=>{
  alerts()
  menu('/HomeMain')
}}>View</button>
    </div>



  </div>




</div>

 <Footers MDK= {MDD}  />
  
  </>
  )
}

export default After