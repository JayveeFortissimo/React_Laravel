import { useEffect } from 'react';
import './MainStyle.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Capcakes = ({props,handle}) => {

    useEffect(()=>{
Aos.init({duration:2000})
    },[])

const {id,title,URL,price} = props;


  return (
  <>
  
  <section id="Cake-slices"></section>
  
        <div className="food-section1" data-aos="zoom-in"  > 
    
          
            <div className="section1-container">
                <div className="section-food">
                    <div className="food-pic">
                        <img src={URL} alt=""/>
                    </div>
                        <div className="description">
                           <h2>{title}</h2>
                           <p> {price}</p>
                        <button className="order-btn" onClick={()=> handle(props)} >order </button>
                        </div>
                </div>

           
         

                </div>
               
               
            </div>






  
  
  </>
  )
}

export default Capcakes