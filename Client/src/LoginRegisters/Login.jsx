import React from 'react'
import styles from '../MainPage/Mains.module.css'
import Axios from 'axios'
import Swal from 'sweetalert2';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../PIC/Sweet.jpg'
import AdminS from '../ADMIN/AdminS';


const Login = () => {

const [show,setshow] = useState(true)

    const DashCustomers = useNavigate();
 
const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [password_confirmation,setpassword_confirmation] = useState('');
const [name,setname] = useState('');
const [address,setaddress] = useState('');
const [contact_number,setcontact_number] = useState('');

const [md,setmd] = useState('Modal');
const [isChecked,setChecked] = useState(false);
   

   
 
    const shows = () =>{
      setChecked(!isChecked)
    }
  
      

const alertsie = () =>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Success Register",
      showConfirmButton: false,
      timer: 1500
    });
  }


const required = () =>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill up the forms!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  
  const required1 = () =>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "password and confirm is not matched!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }


const alertsie1 = () =>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Success login",
      showConfirmButton: false,
      timer: 1500
    });
  }


    let logincustomer = (e) =>{
        e.preventDefault();
      
      if(email===""||password===""||password_confirmation===""){
      required();
      
      }else if(password!=password_confirmation){
      required1();
      
      }else{
      
      const DATA ={
        method: "POST",
        url:"http://127.0.0.1:8000/api/login",
        headers:{ accept: "application/json" },
        data:{
        email:email,
        password:password
        },
        
        };
        
        try {
          Axios.request(DATA)
            .then(function (response) {
              console.log('Response:', response.data);
              
              if (response.data && response.data.message) {
              
                console.log('Login failed:', response.data.message);
              } else {
               
                alertsie1();
                DashCustomers('/After')
               
              }
            })
            .catch(function (error) {
              console.log('This error ', error);
    
          
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email not Found",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            });


        } catch (error) {
          alert('Email not found');
        }
        

      }
        
      }

      const Registration = (e) =>{
        e.preventDefault();
    
        if(email === "" || password ==="" || name === "" || password_confirmation === ""){
                 required();
        }else if(password !== password_confirmation){
    required1();
        }else{
          const DATA ={
            method: "POST",
            url:"http://127.0.0.1:8000/api/register",
            headers:{ accept: "application/json" },
            data:{
              name:name,
            email:email,
            password:password,
            password_confirmation:password_confirmation,
            address:address,
            contact_number:contact_number
            },
            
            };
            
            Axios.request(DATA)
            .then(function (response){
              console.log(response.data)

              if(response.data && response.data.message){
                alert('Failed')
              }else{
                alertsie();
                setemail('');
                setpassword('');
                setname('');
                setaddress('');
                setcontact_number('')
                setpassword_confirmation('');
              }
            })
            .catch(function (error){
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Account is alreqady Taken",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            });
  
    
        }
    
    }
      
  return (
   <>

   <AdminS />
   {
  md === 'Modal' &&
 <div className="modals" >

<div className="overlays" >

  <div className="modal-contents" >
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


   {

    show === true &&
   <section className={styles.sexy}>

<div className={styles.Cards}>

<div className={styles.Texts}>
<div className={styles.Textsi}>
<h1 id={styles.Jaks}>Jakps</h1>
<h1 id={styles.Register}>Login<br/><span>Login your Username,Password</span></h1>

</div>

<div className={styles.Formsi}>
<form onSubmit={logincustomer}>
    <div>
        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Username"  autoComplete="new-password"  value={email} onChange={(e)=>setemail(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password"  placeholder="Password"  autoComplete="new-password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="Confirm">Confirm</label>
        <input type="password"  placeholder="Confrim"  autoComplete="new-password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)}/>
    </div>
  
    <div className={styles.BTN}>
        <button type='submit' name="submit">Login</button>
    </div>

    <div className={styles.links}>
        <p onClick={()=>setshow(false)}>Dont Have Account?</p>
    </div>
</form>

</div>

</div>

<img src={pic} alt="" className={styles.imgs}/>    
</div>    
</section>

   }


{

show === false &&
<section className={styles.sexy}>

<div className={styles.Cards}>

<div className={styles.Texts}>
<div className={styles.Textsi}>
<h1 id={styles.Jaks}>Jakps</h1>
<h1 id={styles.Register}>Register<br/><span>Register your information</span></h1>

</div>

<div className={styles.Formsi}>
<form onSubmit={Registration}>

<div>
        <label htmlFor="Name">Name</label>
        <input type="text"  placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="Address">Address</label>
        <input type="text" placeholder="Address"  name="address"  value={address} onChange={(e)=>setaddress(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="Contact">ContactNumber</label>
        <input type="text" placeholder="Contactnumber" name="contactNumber" value={contact_number} onChange={(e)=>setcontact_number(e.target.value)}/>
    </div>
    
    <div>
        <label htmlFor="Email">Email</label>
        <input type="Email"  placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password"  autoComplete="new-password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="Confirm">Confirm</label>
        <input type="password"  placeholder="Confrim"  autoComplete="new-password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)}/>
    </div>
  
    <div className={styles.BTN}>
        <button type='submit'>Sign in</button>
    </div>

    <div className={styles.links}>
        <p onClick={()=>setshow(true)}>Have Account?</p>
    </div>
</form>

</div>

</div>

<img src={pic} alt="" className={styles.imgs}/>    
</div>    
</section>
   
   


}





   
   </>
  )
}

export default Login