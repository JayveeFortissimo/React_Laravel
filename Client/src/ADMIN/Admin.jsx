import React from 'react'

import SV from './Admins.module.css'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminS from './AdminS'
import Swal from 'sweetalert2'

const Admin = () => {

    const Board = useNavigate();

const [logs,setlogs] = useState({
     username:"",
     password:"",
     password_confirmation:""
})


let values = (e) =>{
e.preventDefault()
const {name,value} = e.target;

setlogs(pre=>{
    return{
        ...pre,
        [name]:value
    }

})


}

    
    let loginAdmin = (e) =>{
        e.preventDefault();
    
    if(logs.username===""||logs.password===""||logs.password_confirmation===""){
    
        Swal.fire({
            title: "Please fill up first",
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
    
    }else if(logs.password!=logs.password_confirmation){
  
        Swal.fire({
            title: "Password and confirm are not matched",
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
        url:"http://127.0.0.1:8000/api/Admin",
        headers:{ accept: "application/json" },
        data:{
        username:logs.username,
        password:logs.password,
        password_confirmation:logs.password_confirmation
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
            title: "Hello Admin ",
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
       Board('/Homies')
    }
}
    
  return (
    <>
  
<AdminS/>

<div className={SV.ParentDiv}>

    <div className={SV.ChildDiv}>

        <div>
            <h1>Admin</h1>
        </div>
        
        <form onSubmit={loginAdmin}>

<div>
    <input type="text" placeholder='Username' name='username' className={SV.input1} value={logs.username} onChange={values}/>
</div>

<div>
    <input type="password" placeholder='Password' name='password' className={SV.input1} value={logs.password} onChange={values}/>
</div>

<div>
    <input type="password" placeholder='Confirm'  name='password_confirmation'className={SV.input1} value={logs.password_confirmation} onChange={values}/>
</div>

<div className={SV.ABTN}>
    <button type='submit'>Login</button>
</div>

        </form>

    </div>

</div>
   



    
    </>
  )
}

export default Admin