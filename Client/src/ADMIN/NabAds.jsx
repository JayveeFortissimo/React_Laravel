import React from 'react'


const NabAds = ({navs,alert}) => {
  return (
   <>
   
   <header>
        <div className="logo">

        </div>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                    <button className="login-btn" onClick={()=>{
                          navs('/')
                          alert();
                    }}>Logout</button>
            </nav>
    </header>

   
   
   
   
   </>
  )
}

export default NabAds