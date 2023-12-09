import Style from '../Styles/AB.module.css'
import Footers from '../MainPage/Footers';
import image1 from '../ImgAbout/image1.png'
import Nav from '../Items/NavBarMain'
import Aos from 'aos'
import { useEffect,useState } from 'react'
import is from '../APICS/star.png'
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const [md,setmd] = useState('Modals');

    const MDD = () =>{
         setmd('Modal')
    }
      
    const order = useNavigate();
    const order1 = useNavigate();

    useEffect(()=>{
         Aos.init({duration:2000})
    })

    const [isChecked,setChecked] = useState(false);
 
  const shows = () =>{
    setChecked(!isChecked)
  }



  return (
    <>
    <Nav />

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

    
    <div>

<div className={Style.MG}>

<div className={Style.Textie} data-aos="zoom-in-up">
    <h4>Dessert Heaven</h4>
  <h1>Deive into Dessert<br/>Paradise: Your Journey to<br/>Sweet Satisfaction Begins<br/>Here</h1>

<div className={Style.Pixie}>
<p>Explore a curated collection of divine desserts, all just a click away. Indulge in</p>
  <p>sweetness delivered straight to you, making every moment a celebration.</p>
</div>

  <div className={Style.bnb}>
    <button onClick={()=>{
     order('/HomeMain')
    }}>Order Now</button>
  </div>

  </div>


  <div className={Style.monoblock} data-aos="fade-up-right">
<img src={image1} alt="" id={Style.img}/>
  </div>


</div>
     

        <div className={Style.hero2}>
            <div className={Style["hero2-1"]}>
                <img data-aos="fade-up-right" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>

            <div className={Style["hero2-2"]}>
                <div className={Style["choose-title1"]}>
                <h3 className="thin"><b>WHO WE ARE</b></h3>
                    <h1 className={Style["hero-title"]}>Crafting Sweet Experiences: Embrace Our Dessert Journey!</h1>
                </div>
                <p>At Dessert Haven, we're passionate about desserts. We're a team of enthusiasts dedicated to curating the finest selection of sweet indulgences for you. From artisanal treats to beloved classics, we bring together the best local bakeries and talented creators to ensure every bite is a moment of pure delight. Our mission is simple: to make your dessert cravings an unforgettable experience with convenience and quality at the forefront of our service.</p>
                <p>We cherish our partnerships with talented dessert makers, spotlighting their craftsmanship and offering a wide variety of flavors and styles. With a focus on convenience and excellence, we bring these delightful creations directly to your doorstep. Join us in savoring the joy of desserts, where every bite is an invitation to experience pure delight.</p>
                </div>  
        </div>
        
        <div className={Style["hero-3"]}>
            <div className={Style["hero3-content"]}>
                <div className={Style["hero3-1"]}>
    
                    <div className={Style.test}>
                    <h3 className="thin"><b>WHY CHOOSE US</b></h3>
                    <h1 className={Style["hero-title"]}>Indulge Effortlessly: Where Sweet Moments Begin Hassle-Free!</h1>
                    </div>
                    <p><span className={Style["pink-text"]}>Exquisite Selection </span> We offer a handpicked assortment of the finest desserts crafted by local bakeries and skilled artisans. From classic favorites to unique, artisanal creations, we bring you an array of sweet treasures to explore and relish.</p>
                    <p><span className={Style["pink-text"]}>Quality Assurance</span> We prioritize quality without compromise. Every dessert showcased on our platform undergoes rigorous quality checks to ensure that each bite is an experience worth savoring. Freshness, taste, and quality are our non-negotiable standards.</p>
                    <p><span className={Style["pink-text"]}>Convenience Redefined</span> Ordering desserts has never been easier. With a user-friendly interface, seamless browsing, and a hassle-free ordering process, we bring your favorite treats right to your doorstep. Enjoy the convenience of indulging in heavenly desserts from the comfort of your home.</p>
                    <button className={Style["hero2-btn"]} onClick={()=> order('/HomeMain')}>Food Menu</button>
                </div>
    
                <div className={Style["hero3-2"]}>
                    <img data-aos="fade-up-left"src="https://images.pexels.com/photos/372886/pexels-photo-372886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
            </div>
        </div>

        <div className={Style["choose-us"]}>
            <div className={Style["choose-section1"]}>
              
                <h1 className={Style["hero-title"]}>Quality. Convenience. Delight: Choosing Dessert Haven for Dessert</h1>
                <p>At Dessert Haven, we stand out as your premier choice for dessert indulgence. Our platform meticulously selects the finest desserts from local artisans and bakeries, ensuring a symphony of flavors and quality in every bite. With a seamless ordering process and a commitment to freshness, convenience, and top-notch service, we strive to exceed your expectations. From our curated selection to our dedication to customer satisfaction, Dessert Haven is your gateway to a delightful dessert experience unlike any other.</p>
            </div>
    
            <div className={Style["choose-section2"]}>
                <h1 className={Style["hero-title"]}>Our Promises</h1>
    
                    <div className={Style["rate-box"]}>
                        <div className={Style["rate-score"]}>
                            <img src={is} className={Style.star}/>
                            <h3>CONSISTENT CUSTOMER SATISFACTION </h3>
                        </div>
                        <div className={Style["rate-score"]}>
                            <img src={is} className={Style.star}/>
                            <h3>HIGH QUALITY INGREDIENTS</h3>
                        </div>

                        <div className={Style["rate-score"]}>
                            <img src={is} className={Style.star}/>
                            <h3> OVER 100 DELIGHTFUL DISHES</h3>
                        </div>
                        <div className={Style["rate-score"]}>
                            <img src={is} className={Style.star}/>
                            <h3>HEALTH AND SAFETY COMPLIANCE</h3>
                        </div>
                    </div>
            </div>
        </div>

        <div className={Style["choose-section3"]}>
            <div className={Style.container}>
                <div className={Style.card} id={Style.c1}></div>
                <div className={Style.card} id={Style.c2}></div>
                <div className={Style.card} id={Style.c3}></div>
                <div className={Style.card} id={Style.c4}></div>
                <div className={Style.card} id={Style.c5}></div>
            </div>
        </div>
    
            <div className={Style["choose-section4"]}>
                <p>We look forward to serving more people with delectable food and unparalleled service in picture-perfect settings.</p>
                <p><b>Ready to experience extraordinary cuisine?</b></p>
                <button className={Style["choose-btn"]} onClick={()=> {
                    order1('/HomeMain')
                }}>Food Menu</button>
            </div>
     

    </div>
    
    
    <Footers MDK= {MDD}/>
    
    
    
    </>
  )
}

export default AboutUs