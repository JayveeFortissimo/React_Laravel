import React from 'react'
import Stylesia from './Stylesia.module.css'
import NavigationBS from './NavigationBS'
import { useState,useEffect } from 'react'
import Axios from 'axios'


const Users = () => {

const [Admins,setAdmis] = useState(true);
const [containers,setcontainers] = useState([]);


useEffect(() => {
    Axios.get('http://127.0.0.1:8000/api/userget')
      .then((response) => {
        setcontainers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []); 



const [information,setinformation] = useState({
 
     name:'',
     address:'',
     contact_number:'',
     email:'',
     password:'',
     password_confirmation:''

})


let handling = (e) =>{
    e.preventDefault();
 const {name,value} = e.target;

 setinformation(pred=>{
         return{
               ...pred,
               [name]:value  
         }
 })

}


const Registration = (e) =>{
    e.preventDefault();

    if(information.email === '' || information.password ==="" || information.name === "" || information.password_confirmation === ""||information.address === ""||information.contact_number === ""){
             alert('Fill up the form please')
    }else if(information.password !== information.password_confirmation){
     alert('Password and confirm are not matched')
    }else{
      const DATA ={
        method: "POST",
        url:"http://127.0.0.1:8000/api/register",
        headers:{ accept: "application/json" },
        data:{
          name:information.name,
        email:information.email,
        password:information.password,
        password_confirmation:information.password_confirmation,
        address:information.address,
        contact_number:information.contact_number
        },
        
        };
        
        Axios.request(DATA)
        .then(function (response){
          console.log(response.data)

          if(response.data && response.data.message){
            alert('Failed')
          }else{
            alert('success')
          }
        })
        .catch(function (error){
          console.log(error)
        });

    setAdmis(true)
    }

}



  return (
    <>
    <NavigationBS />
    {Admins === true &&
    <div className={Stylesia.MM}>

        <h1> Users Account </h1>

        <div className={Stylesia.Account}>

            <div className="Register">
                <div className={Stylesia["box-1"]}> 
                    <p>Register new Admin</p>
                        <div className={Stylesia["food-btn"]}>
                            <button className={Stylesia.register} id={Stylesia["register-btn"]} onClick={()=>setAdmis(false)}>Register</button>               
                       </div> 
                </div>
    
            </div>
    
            <div className={Stylesia.container}>
      {
        containers.map(inso =>{
             return(
                
                <div className={Stylesia.box} key={inso.id}> 
                    <p>email: {inso.email}</p>
                    <p>Address: {inso.address}</p>
                    <p>Contact Number: {inso.contact_number}</p>
                    <p>password: N/A</p>
                
                        
                </div>

             )
        })
      }

    
                
            </div>
        </div>
    
    </div>
}


{
Admins === false &&
<div className={Stylesia.MM2}>

        <div className={Stylesia["add-product"]}>
            <h1>Add New Profile</h1>

            <form onSubmit={Registration}>
          
            <input type="text"  placeholder="Name" name='name' value={information.name}  onChange={handling} />
            <input type="text" placeholder="address"  name="address"  value={information.address} onChange={handling}/>
            <input type="text" placeholder="contactnumber" name="contact_number" value={information.contact_number}  onChange={handling}/>
            <input type="Email"  placeholder="email" name ='email' value={information.email} onChange={handling} />
            <input type="password" placeholder="Password" name='password'  autoComplete="new-password" value={information.password} onChange={handling}/>
            <input type="password"  placeholder="password_confirmation" name='password_confirmation' autoComplete="new-password" value={information.password_confirmation} onChange={handling}/>
            <button className={Stylesia["add-btn"]} type='submit'>Add Profile</button>
            </form>
        </div>

    </div>

}
    
    
    </>
  )
}

export default Users