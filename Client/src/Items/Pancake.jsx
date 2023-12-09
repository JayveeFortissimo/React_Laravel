import React from 'react'




const Pancake = ({props,handle}) => {

const {id,title,price,URL} = props;

  return (
    <>
    
    <div className="food-section1"> 
            <section id="pancake"></section>
           

            <div className="section1-container" data-aos="zoom-in">

                <div className="section-food">
                    <div className="food-pic">
                        <img src={URL} alt=""/>
                    </div>
                        <div className="description">
                           <h2>{title}</h2>
                           <p>{price}</p>
                            <button className="order-btn" onClick={()=> handle(props)}>Order</button>
                        </div>
                </div>

             
            </div>

        </div>


    
    
    
    </>
  )
}

export default Pancake