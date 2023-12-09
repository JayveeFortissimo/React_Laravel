import {Routes, Route} from 'react-router-dom'

import HomeMain from './Items/SecondMain'
import AboutUs from './Items/AboutUs'
import Contact from './Items/Contact'
import MainP from './MainPage/Main'
import Admin from './ADMIN/Admin'
import AdminDashBoard from './ADMIN/AdminDashBoard'
import CustomerDash from './CustomerDash/Customers'
import Ress from './Recep/Ress'
import Logins from './LoginRegisters/Login'
import After from './After/After'
import Homies from './ADMINPANEL/Homies'
import Product from './ADMINPANEL/Product'
import Users from './ADMINPANEL/Users'
import AdminAccount from './ADMINPANEL/AdminAccount'
import Messages from './ADMINPANEL/Messages'
import Orders from './ADMINPANEL/Orders'
import Profile from './PROFILE/Profile'

const Routesy = () => {
  return (
    <>
    
    <Routes>

<Route path='/' element={<MainP/>}/>
<Route path='/AboutUs' element={<AboutUs/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/HomeMain' element={<HomeMain/>}/>
<Route path='/Admin' element={<Admin/>}/>
<Route path='/AdminDashBoard' element={<AdminDashBoard/>}/>
<Route path='/CustomerDashBoard' element={<CustomerDash/>}/>
<Route path='/Ress' element={<Ress/>}/>
<Route path='/Login' element={<Logins/>}/>
<Route path='/After' element={<After/>}/>
<Route path='/Homies' element={<Homies/>}/>
<Route path='/Product' element={<Product/>}/>
<Route path='/Users' element={<Users/>}/>
<Route path='/AdminAccount' element={<AdminAccount/>}/>
<Route path='/Messages' element={<Messages/>}/>
<Route path='/Orders' element={<Orders/>}/>
<Route path='/Profile' element={<Profile/>}/>

    </Routes>
    
    
    
    </>
    
  )
}

export default Routesy


