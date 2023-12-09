import React from 'react'
import Stylesia from './Stylesia.module.css'
import NavigationBS from './NavigationBS'
import { useState, useEffect } from 'react'
import Addings from './Addings'
import axios from 'axios'


const AdminAccount = () => {

const [Admins,setAdmis] = useState(true);
const [arrs,setarrs] = useState([])
const [info,setinfo] = useState([]);

const [information,setinformation] = useState({
    username:'',
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

    if(information.username===''|| information.password ==="" || information.password_confirmation === ""){
          alert('Nedd to fill up')
    }else if(information.password !== information.password_confirmation){
     alert('Password and confirmation are not matched')
    }else{
      const DATA ={
        method: "POST",
        url:"http://127.0.0.1:8000/api/getAdmin",
        headers:{ accept: "application/json" },
        data:{
         
        username:information.username,
        password:information.password,
        password_confirmation:information.password_confirmation,
        },
        
        };
        
        axios.request(DATA)
        .then(function (response){
          console.log(response.data)

          if(response.data && response.data.message){
            alert('Failed')
          }else{
          alert('Completed')
          }
        })
        .catch(function (error){
        console.log(error);
        });

      setAdmis(true);

    }

}

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Adminget')
      .then((response) => {
        setinfo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []); 




  return (
    <>
    <NavigationBS />
    {Admins === true &&

    <div className={Stylesia.MM}>

        <h1> Admins Account </h1>

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
    
             {info.map(inso =>{
                 
                 return(
                    
                <div className={Stylesia.box} key={inso.id}> 
               
                <p>username: {inso.username}</p>
               <p>password: N/A</p>
                   
            </div>
                 )
             })}
    
                
            </div>
        </div>

    
    </div>


}




{
Admins === false &&
<div className={Stylesia.MM2}>

        <div className={Stylesia["add-product"]}>
            <h1>Add New Profile</h1>


            <form onSubmit={Registration} >
            <input type="text" placeholder="Enter your username"  name='username' value={information.username} onChange={handling}  />
            <input type="text" placeholder="Enter your password" name='password'  value={information.password}  onChange={handling}/>
            <input type="text" placeholder="Confirm your password" name='password_confirmation' value={information.password_confirmation}  onChange={handling}/>
            <button className={Stylesia["add-btn"]} type='submit'>Add Profile</button>
            </form>
        </div>

    </div>
}


    
    </>
  )
}

export default AdminAccount