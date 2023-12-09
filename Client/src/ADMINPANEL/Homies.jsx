import React from 'react'
import NavigationBS from './NavigationBS'
import MAKO from './MAKO.module.css'
import { useState,useEffect } from 'react'
import one from '../APICS/icons8-customer-60.png'
import one1 from '../APICS/icons8-order-60.png'
import one2 from '../APICS/icons8-product-60.png'
import axios from 'axios'
import Swal from 'sweetalert2';


const Homies = () => {

  const [container, setContainers] = useState([]);
  const [subcontainer,setsubcontainer] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/userget')
      .then((response) => {
        setsubcontainer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []); 




  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/input')
      .then((response) => setContainers(response.data.foodItems))
      .catch((error) => console.error(error));
  }, []);

  const success = () =>{
    Swal.fire({
      title: "Succes Remove",
      text: "Please Reload the page",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
      .then((response) => {
        console.log(response.data); 
        setContainers((prevData) => prevData.filter((item) => item.id !== id));   
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  success();
      
  };



  

  return (
   <>

   <NavigationBS />

  

  

   <div className={MAKO.KARLO}>
      <div className={MAKO.row1}>
        <div className={MAKO.col1}>
          <div className={MAKO.numlett}>
            <div>
              <h2>54</h2>
              <p>Customers</p>
            </div>
            <img src={one} alt="" />
          </div>

          <div className={MAKO.numlett}>
            <div>
              <h2>69</h2>
              <p>Products</p>
            </div>
            <img src={one1} alt="" />
          </div>

          <div className={MAKO.numlett}>
            <div>
              <h2>124</h2>
              <p>Orders</p>
            </div>
            <img src={one2} alt="" />
          </div>
        </div>
      </div>

{/*///////////////////////////////////////////////////////*/}
<div className={MAKO.MKK}>
   
        <div className={MAKO.ordertbl}>
          <div className={MAKO.header}>
            <h2>Orders History</h2>
       
          </div>
          <table>
            <tbody>
              <tr className={MAKO.tr1}>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              {Array.isArray(container) && container.length > 0 ? (
      container.map((inso, index) => (
        <tr key={index} >
          <td >{inso.FoodName}</td>
          <td >{inso.Quantity}</td>
          <td >{inso.Price !== undefined ? inso.Price : 'N/A'}</td>
                <td><button onClick={() => handleDelete(inso.id)}>Deletes</button></td>
        </tr>
      ))
    ) : (
      <tr >
        <td  colSpan="3">Loading...</td>
      </tr>
    )}
            </tbody>
          </table>
        </div>



        <div className={MAKO.Customertbl}>
          <div className={MAKO.header}>
            <h2>Customers</h2>
     
          </div>

          <table>
            <tbody>
              <tr className={MAKO.tr1}>
                <th>Customer</th>
                <th>Contact</th>
                <th>Address</th>
              </tr>
              {subcontainer.map((inso) => (
        <tr key={inso.id}>
          <td>{inso.name}</td>
          <td>{inso.contact_number}</td>
          <td>{inso.address}</td>
        </tr>
      ))}
            
            </tbody>
          </table>

        </div>
      </div>
    </div>
   
 
   </>
  )
}

export default Homies