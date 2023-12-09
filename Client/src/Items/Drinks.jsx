
const Drinks = ({props,handle}) => {

const {id,title,URL,price} = props;

  return (
   <>
   
   <section id="drinks"></section>
        <div className="food-section1" data-aos="zoom-in">
            

            <div className="section1-container">

                <div className="section-food">
                    <div className="food-pic">
                        <img src={URL} alt=""/>
                    </div>
                        <div className="description">
                           <h2>{title}</h2>
                           <p> {price}</p>
                            <button className="order-btn" onClick={()=>handle(props)}>Order</button>
                        </div>
                </div>
               
            </div>

        </div>

   
   </>
  )
}

export default Drinks