import Cake from '../ImageMains/Cake1.png'
import CupCake from '../ImageMains/CupCake1.png'
import Pancake from '../ImageMains/Pancake1.png'
import Drings from '../ImageMains/Drinks1.png'
import Donut from '../ImageMains/Donut1.png'
import { useNavigate } from 'react-router-dom'
import styles from './Mains.module.css'
import Nab from './Nab'
import Footers from './Footers'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react'
import Aos from 'aos'

const Main = () => {

  //useNavigate to navigate
  const menu = useNavigate();

  //Sweet alerts
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
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
   }


//for animation
    useEffect(()=>{
  Aos.init({duration:2000});
    },[])


  return (
  <>
{/*///////Component Call////////////*/}
<Nab Alert={alerts}/>


 <div className={styles.imgsie} data-aos="zoom-in-up" >

  <div className={styles.Textie}>
  <h1>Welcome! <br/>DESSERT HAVEN: <br/>Where Blissful <br/>Bites Awaits</h1>

  <div className={styles.bnb}>
    <button onClick={()=>{
        alerts()
       menu('/Login')
    }}>Order Now</button>
  </div>

  </div>

  
 </div>




<div className={styles.Desert} data-aos="zoom-in-up">

  <div className={styles.texts}>
    <h1>DESSERT HAVEN </h1>
    <h1>MENU</h1>
    <p>Sweet Temptions, Delightful Creations: </p>
    <p>Welcome to Desssert Paradise</p>
  </div>


  <div className={styles.options}>

    <div data-aos="fade-right">
   <h2>CAKE</h2>
<img src={Cake} alt="" />
<h3>400</h3>
    </div>

    <div data-aos="fade-right">
    <h2>CUPCAKE</h2>
    <img src={CupCake} alt="" />
    <h3>30</h3>
    </div>

    <div data-aos="zoom-in-up">
    <h2>PANCAKE</h2>
    <img src={Pancake} alt="" />
    <h3>20</h3>
    </div>

    <div data-aos="fade-left">
    <h2>DONUT</h2>
    <img src={Donut} alt="" />
    <h3>50</h3>
    </div>

    <div data-aos="fade-left">
    <h2>DRINKS</h2>
    <img src={Drings} alt="" />
    <h3>40</h3>
    </div>



  </div>




</div>


<Footers />
  

  </>
  )
}

export default Main