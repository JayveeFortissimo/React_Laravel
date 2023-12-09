import Nav from './NavBarMain'
import './Styling.css'
import { Suspense, useState } from 'react';
import Footers from '../MainPage/Footers';
import C from './C.module.css'
import Axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
//useStates
  const [md,setmd] = useState('Modals');
  const [isChecked,setChecked] = useState(false);

  /*/////////////////Showing modals */
  const MDD = () =>{
       setmd('Modal')
  }

  const shows = () =>{
    setChecked(!isChecked)
  }
  /*////////////////////End showing ////*/

  const [messages,setmessage] = useState({
       name: '',
       email:'',
       contact:'',
       message:''
  })

  const hundles = (e) =>{
e.preventDefault();
   const {name,value} = e.target;
   setmessage((pre)=>{
      return{
          ...pre,
          [name]:value
      }
   })
   
  }

  const submited = (e) =>{
    e.preventDefault();

if(messages.name === '' || messages.email === '' || messages.contact === '' || messages.message === ''){
  Swal.fire({
    title: "Please message Something",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
}else{

  const DATA ={
    method: "POST",
    url:"http://127.0.0.1:8000/api/messages",
    headers:{ accept: "application/json" },
    data:{
 name:messages.name,
  email:messages.email,
  contact:messages.contact,
  message:messages.message

    },
    
    };
    
    Axios.request(DATA)
    .then(function (response){
      console.log(response.data)
    })
    .catch(function (error){
      console.log(error)
    });

    Swal.fire({
      title: "Your Message Accepted",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });

setmessage({
   name:'',
   email:'',
   contact:'',
   message:''
})

}

  

  }


  return (
   <>
   
   <Nav />

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
        <input type="checkbox" checked={isChecked} onChange={shows}/>
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

   <div className={C.cat}>
      <div className={C.details} data-aos="zoom-in-up">
        <h3 className={C['thin-1']}><b>Contact Us: Let's Sweeten the Conversation</b></h3>
        <h1 className={C['hero-title']}>Get in Touch for Sweet Support!</h1>
        <p>Got inquiries or need assistance? Reach out to Dessert Haven for any dessert-related queries. Our team is dedicated to ensuring your sweet experience is smooth and satisfying. Contact us today—we're eager to assist!</p>

        <form onSubmit={submited}>
          <div className={C.in}>
            <input type="text" placeholder="Name" name='name' value={messages.name} onChange={hundles} />

            <input type="text" placeholder="Email" name='email' value={messages.email} onChange={hundles}/>

            <input type="text" placeholder="Contact Number" name='contact' value={messages.contact} onChange={hundles} />
            <input type="text" placeholder="Message" className={C.long} name='message' value={messages.message} onChange={hundles}/>
          </div>

          <span><b>NOTE:</b></span>
        <p className={C.note}>We respect your privacy and are committed to protecting your information. Your data will remain within our team. We will also send emails & promotions from time to time. You may unsubscribe anytime.</p>
        
        <button className={C.send} type='submit'>Send</button>

        </form>

    
      </div>
    </div>

   
   
   <Footers MDK= {MDD}/>
   
   
   
   
   </>
  )
}

export default Contact