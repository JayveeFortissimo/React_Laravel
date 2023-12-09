import NavBar from './NavBarMain'
import './MainStyle.css'
import Cart from '../Img/cart-icon.png'
import CupCakesi from '../JsInfo/CupCakeInfo'
import CupCakes from './CupCake'
import Drinks from './Drinks'
import Drunk from '../JsInfo/Drinks'
import Donut from '../JsInfo/Donut'
import Donuts from './Donut'
import Pancake from './Pancake'
import PanC from '../JsInfo/Pancake'
import { useState } from 'react'
import CakeSlice from '../JsInfo/CakeSliceInfo'
import CakeSlices from './CakeSlice'
import { useEffect } from 'react'
import images from  '../images/nyan-cat.gif'
import Swal from 'sweetalert2';
import Axios from 'axios'
import Footers from '../MainPage/Footers';

const SecondMain = () => {

 /////////////Use State for functions//////////////
  const [cart,setcart] = useState([]);
  
  const [price,setPrice] = useState(0);
  const [modals,setnmodals] = useState(false);
  const [cartvisible,setcartVisible] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [md,setmd] = useState('Modals');
  const [isChecked,setChecked] = useState(false);
const [Condition,setCondition] = useState(false);

const [user,setuser] = useState({
  name:'',
  Address:'',
  contact_number:''
})


////////////////////////Sweets alerts ///////////////////////
const Carts = (e) =>{

  if (cart.length > 0) {
    const cartData = cart.map((item) => ({ FoodName: item.title, Quantity: item.amount, price: item.price }));

    const postData = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/input',
      headers: { accept: 'application/json' },
      data: { cart: cartData },
    };

    Axios.request(postData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

   
  }

  Axios.get('http://127.0.0.1:8000/api/input')
  .then(function (response) {
    console.log(response.data);
    // Process the retrieved food items as needed
  })
  .catch(function (error) {
    console.log(error.response.data);
  });

 
}

const Alert = () =>{
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your order is added to cart",
    showConfirmButton: false,
    timer: 1500
  });

}
const here = () =>{
  Swal.fire({
    title: "Hi Welcome to our menu",
    width: 500,
    padding: "3em",
    color: "rgba(255, 0, 0, 0.4)",
    background: "#fff url(/images/trees.png)",
    backdrop: `
    rgba(255, 0, 0, 0.2)
      url(${images})
      left top
      no-repeat
    `
  });
}

const here1 = () =>{
  Swal.fire({
    title: "Thanks for trusting us",
    width: 500,
    padding: "3em",
    color: "rgba(255, 0, 0, 0.4)",
    background: "#fff url(/images/trees.png)",
    backdrop: `
    rgba(255, 0, 0, 0.2)
      url(${images})
      left top
      no-repeat
    `
  });
}


//////// Show Modals/////////////////
let Modals = ()=>{
  setnmodals(!modals)
}

const shows = () =>{
  setChecked(!isChecked)
}

const MDD = () =>{
  setmd('Modal')
}




////////////////////////////////////////

///////Functions for Add to carts////////////////////////////////////
const handleClick = (props)=>{
  if (!cart.some((cartItem) => cartItem.id === props.id)) {
    const newItem = { ...props, amount: props.amount || 1 };
    setcart([...cart, newItem]);
  Alert();
  setcartVisible(true);
  }
}

const handleChange = (props, d) =>{
const ind = cart.indexOf(props);
const arr = cart;
arr[ind].amount += d;
if(arr[ind].amount === 0) arr[ind].amount = 1;
setcart([...arr])
console.log(props)

};

const handlePrice = ()=>{
  let ans = 0;
  cart.map((props)=>(
     (ans += props.amount * props.price)
  ))
  setPrice(ans);
}

useEffect(()=>{
   handlePrice()
})

//For remove Itemsss
const handleRemove = (id) =>{
  const arr = cart.filter((props)=>props.id !== id);
  setcart(arr);

}


/////////////////USeeffect i use this para makuha yung details ni customer////////////////
useEffect(() => {
  Axios.get('http://127.0.0.1:8000/api/details/32')
    .then((response) => setuser({
      name:response.data.name,
      address: response.data.address,
      contact_number: response.data.contact_number,

    }))
    .catch((error) => console.error(error));
}, []);


///// Receipt Modal function, for receipt modal, Hindi kasi ako gumait ng useContext para maacces lahat nung components hehez ////////////
const ReceiptModal = ({ cartItems, totalPrice, onClose }) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content receipt-modal">
          <h2>Receipt</h2>

          <h3>CustomerName: {user.name}</h3>
  <h3>Address: {user.address}</h3>
  <h3>ContactNumber: {user.contact_number}</h3>

          {cartItems.map((item) => (
            <div className="receipt-item" key={item.id}>
              <img className="receipt-item-image" src={item.URL} alt={item.title} />
              <div className="receipt-item-details">
                <p className="receipt-item-title">{item.title}</p>
                <p className="receipt-item-quantity">Quantity: {item.amount}</p>
                <p className="receipt-item-price">Price: Rs {item.price * item.amount}</p>
              </div>
            </div>
          ))}

          <div className="total">
            <span>Total Price of your Cart</span>
            <span>Rs {totalPrice}</span>
          </div>

          <button className="hero1-btns" onClick={()=>{
            onClose();
            here1();
          }}>
           Ok
          </button>
        </div>
      </div>
    </div>
  );
};




  return (
  <>
  
  <NavBar />

{/*//////////////// Food cart nav var sticky////////////////*/}
  {
    cartvisible === true &&
      <div className="sticky-nav">
      <ul>
          <li><a href="#Cake-slices">Cake Slices</a></li>
          <li><a href="#cup-cake">Cup Cake</a></li>
          <li><a href="#drinks">Drinks</a></li>
          <li><a href="#donut">Donut</a></li>
          <li><a href="#pancake">Pancake</a></li>
          <li style={{ backgroundColor:'white',borderRadius:'50%',width:'2.9rem',height:'2rem',display:'flex',justifyContent:'center',position:'relative'}}><img src={Cart} className="icon" onClick={()=> Modals(true)} /></li>
      </ul>
  </div>
}



{/*///////////Section, picture intro text/////////*/}
  <div className="hero-1" data-aos="zoom-in-up">
       
            <div className="hero1-1" data-aos="zoom-in-up">
                <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>

                    <h1> styling to deliver wonderful memories that last a lifetime</h1>
                    <p>We understand the multifaceted nature of event planning, so aside from food catering you can put your trust in us to style your event the way you envision it!</p>
                </div>

                <div className="BTNS">
                    <button className="hero1-btn" onClick={()=>here()}>Food Menu</button>
                </div>

            </div>

            <div className="hero1-2">
              
            </div>         

        </div>

{/**********************Modal of Food Cart /////////////////////////////////*/}
 {
 modals &&(
<div className="modal">

<div className="overlay">

  <div className="modal-content">
    <h2>Your order</h2>

    {
            cart.map((props)=>
                <div className="cart_box" key={props.id}>
                  
                    <div className="cart_img">
                        <img src={props.URL} />
                        <p>{props.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(props, +1)}> + </button>
                        <button>{props.amount}</button>
                        <button onClick={()=>handleChange(props, -1)}> - </button>
                    </div>
                    <div>
                        <span className="price">{props.price}</span>
                        <button onClick={()=>handleRemove(props.id)} style={{ height:'2rem',background:'rgb(219, 56, 84)'}} >Remove</button>
                    </div>
                </div>
            ) }
            
        <div className='total'>
            <span className='PP' >Total Price of your Cart</span>
            <span className='PP'>Rs - {price}</span>
        </div>
        <div style={{ display:'flex',gap:'40px' }}>
        <button className="hero1-btns" onClick={()=>{
          Carts();
          setCondition(true)
        }}>Buy?</button>
    <button className="hero1-btns" onClick={()=> setnmodals(false)}>Close</button>
   
        </div>
        
  </div>

</div>

 </div>
 )

 }

 {/*//////////////////Terms and regulations Modal///////////////*/}
 {
  md === 'Modal' &&
 <div className="modals">

<div className="overlays">

  <div className="modal-contents">
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
        <input type="checkbox" onChange={shows} checked={isChecked}/>
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



 {/*/////////////////////////MODALS FOR TERMS AND CONDITION IN BUYING/////////////////*/ }

{
  Condition === true &&
 <div className="modals">

<div className="overlays">

  <div className="modal-contents">
    <h2> Terms and Conditions</h2>

<div className='MKLL'>

<div>
  <h4>Order Placement and Acceptance</h4>
  <p style={{ fontSize:'0.8rem' }}>a.By placing an order on  Sweet Dessert Website, you agree to purchase the selected items <br/>at the specified prices, including any applicable taxes and shipping fees.</p>
  <p style={{ fontSize:'0.8rem' }}>b.We reserve the right to accept or decline your order for any reason, including but not limited to<br/>product availability, errors in pricing, or suspicion of fraudulent activity.</p>
</div>


<div>
  <h4>Pricing and Payment</h4>
  <p style={{ fontSize:'0.8rem' }}>a. All prices for items on Sweet Dessert Website are listed in currency and are subject to change without notice. </p>
  <p style={{ fontSize:'0.8rem' }}>b. We reserve the right to refuse or cancel orders if there are discrepancies in pricing or payment information.</p>
</div>

<div>
  <h4>Shipping and Delivery</h4>
  <p style={{ fontSize:'0.8rem' }}>a. We will make reasonable efforts to deliver your order within the specified timeframe. However, delivery times are estimates and may be subject to unforeseen delays. </p>
  <p style={{ fontSize:'0.8rem' }}>b. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.</p>
</div>


<div>
  <h4>Returns and Refunds</h4>
  <p style={{ fontSize:'0.8rem' }}>a. Please refer to our Return Policy link to return policy for information on returns, exchanges, and refunds.</p>
  <p style={{ fontSize:'0.8rem' }}>b. In the event of damaged or defective items, please contact our customer service within 7 days of receiving the order for assistance.</p>
</div>

  
  <div style={{ display:'flex',alignItems:'center'}}>
      <form>
        <input type="checkbox" checked={isChecked} onChange={shows}/>
        <span style={{ fontSize:'0.8rem' }}>  Check this if you agree of our Terms and conditions</span>
      </form>
  </div>

 {
 isChecked &&
 <div className='KAPE'>
    <button onClick={()=>{
         setnmodals(false);
         setCondition(false);
setShowReceiptModal(true);
    }}>Proceed to your order</button>
  </div>
 }
 
  </div>

  </div>

</div>

 </div>

}


{/*///////////Receipt components passing a props///////////////*/}

{showReceiptModal === true && (
        <ReceiptModal
          cartItems={cart}
          totalPrice={price}
          onClose={() => setShowReceiptModal(false)}
        />
      )}




{/*///////////////////////////////Foods Components/////////////////////////////*/}

<div className='CC'>
<h1 className="food-title">Cake Slice</h1>

<div className='MAMOON'>

{CakeSlice.map((props) => <CakeSlices key={props.id}  props={props} handle={handleClick} />)}
</div>

</div>



<div className='CC1'>
<h1 className="food-title">CupCake</h1>

<div className='MAMOON'>

{CupCakesi.map((props) => <CupCakes key={props.id}  props={props} handle={handleClick} />)}
</div>

</div>



<div className='CC2'>
<h1 className="food-title"> Donuts</h1>

<div className='MAMOON'>

{Donut.map((props) => <Donuts key={props.id} props ={props} handle={handleClick}/>)}
</div>

</div>



<div className='CC3'>
<h1 className="food-title"> Drinks </h1>

<div className='MAMOON'>

{Drunk.map((props) => <Drinks key={props.id} props={props} handle={handleClick}/>)}
</div>

</div>



<div className='CC4'>

<h1 className="food-title"> PANCAKE </h1>
<div className='MAMOON'>

{PanC.map((props) => <Pancake key={props.id} props={props} handle={handleClick}/>)}
</div>

</div>

<Footers MDK= {MDD} />

  
  </>
  )
}

export default SecondMain