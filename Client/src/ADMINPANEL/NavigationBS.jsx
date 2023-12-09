import React from 'react'
import Stylesia from './Stylesia.module.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavigationBS = () => {

const ads = useNavigate();


  return (
<>

<div className={Stylesia.Header}>
        <h1>Admin<span className={Stylesia.pink}>Panel</span></h1>
            <nav>
                <ul>
                    <li><Link to='/Homies'>Home</Link></li>
                    <li><Link to='/Product'>Products</Link></li>
                    <li><Link to='/Orders'>Orders</Link></li>
                    <li><Link to='/Messages'>Messages</Link></li>
                    <li><Link to='/AdminAccount'>Admins</Link></li>
                    <li><Link to='/Users'>Users</Link></li>
                    <li onClick={()=>ads('/Admin')}>Sign out</li>
                </ul>
            </nav>
    </div>



</>
  )
}

export default NavigationBS