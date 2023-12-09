import React from 'react'
import Nadine from './Nadine.module.css'
import LogoutsC from './LogoutsC'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useState,useEffect } from 'react'
import ims from '../images/nyan-cat.gif'

const Customers = () => {

const navigateBack = useNavigate();

  const [showing,setshowing] = useState(false)
    const [isClicked,setclicked] = useState(false);
    const thankyou = () =>{
      Swal.fire({
        title: "Thanks for trusting us",
        width: 500,
        padding: "3em",
        color: "rgb(219, 56, 84)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgba(255, 0, 0, 0.2)
          url(${ims})
          left top
          no-repeat
        `
      });
    }
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

  ///////////For Get the data into table//////////////
  const [container, setContainers] = useState([]);
  const [items, setItems] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setprice] = useState(null);



 


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/input')
      .then((response) => setContainers(response.data.foodItems))
      .catch((error) => console.error(error));
  }, []);


  //handle delete
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

  ///////put items
  const Inputsies = (e) => {
    e.preventDefault();
    const newData = {
      FoodName: items,
      Quantity: quantity,
      price:price
    };
    axios.post('http://127.0.0.1:8000/api/input', { cart: [newData] })
      .then((response) => {
        console.log(response.data);
        setContainers((prevData) => [...prevData, newData]);
      })
      .catch((error) => {
        console.log(error);
      });
   
    setItems(null);
    setQuantity(null);
  setprice(null)
  };



  return (
   <>
   <LogoutsC />
  
  

{
  showing === false &&
  <div className="modal">

<div className="overlay">

  <div className="modal-content">
    <h2>Your Resibo <span>(want to edit? click the button close)</span></h2>

 

  <table className={Nadine.table}>
  <thead className={Nadine.thead}>
    <tr className={Nadine.tr}>
      <th className={Nadine.th}>Foodname</th>
      <th className={Nadine.th}>Quantity</th>
      <th className={Nadine.th}>Price</th>
    </tr>
  </thead>
  <tbody>
    {Array.isArray(container) && container.length > 0 ? (
      container.map((inso, index) => (
        <tr key={index} className={Nadine.tr}>
          <td className={Nadine.td}>{inso.FoodName}</td>
          <td className={Nadine.td}>{inso.Quantity}</td>
          <td className={Nadine.td}>{inso.Price !== undefined ? inso.Price : 'N/A'}</td>

        </tr>
      ))
    ) : (
      <tr className={Nadine.tr}>
        <td className={Nadine.td} colSpan="3">Loading...</td>
      </tr>
    )}
  </tbody>
</table>

        <button onClick={()=>setshowing(true)} className={Nadine.BTNSIE}>Close</button>
        <button className={Nadine.BTNSIE} onClick={()=>{

          setshowing(true);
             thankyou();
             navigateBack('/HomeMain')
   
        }}>Buy</button>
  </div>

</div>

 </div>
  
}

<div className={Nadine.Masters}>
          <h1>Customer</h1>
          <div className={Nadine.Recipt}>
            {<h3 onClick={()=>setshowing(false)}>Your resibo</h3>}
            </div>
          <div className={Nadine.Open} >
            <h2>Do you want edit your order?</h2>
              <span>
              <button onClick={()=>setclicked(true)}>Click this!</button>
              </span>
          </div>

          <div >

    {isClicked === true&&
    <div className={Nadine.MMX}>
    <span>Edit</span>
    <form onSubmit={Inputsies}>
      <input
        type="text"
        placeholder="ITEMS"
        name="items"
        value={items || ''}
        onChange={(e) => setItems(e.target.value)}
      />
      <div>
      <input
        type="text"
        placeholder="Price"
        name="price"
        value={price || ''}
        onChange={(e) => setprice(e.target.value)}
      />
      </div>
      <div>
        <input
          type="text"
          placeholder="QUANTITY"
          name="quantity"
          value={quantity || ''}
          onChange={(e) => setQuantity(e.target.value)}
        />
        
      </div>
      <span className={Nadine.MM} >
          <button type="submit">submit</button>
        </span>
      
    </form>
  </div>
    
    
    }
</div>



<TableContainer component={Paper}>
      <h1>Your Orders Orders</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foodname</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(container) && container.length > 0 ? (
                container.map((inso, index) => (
                  <TableRow key={index}>
                    <TableCell>{inso.FoodName}</TableCell>
                    <TableCell>{inso.Quantity}</TableCell>
                    <TableCell>{inso.Price !== undefined ? inso.Price : 'N/A'}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(inso.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="3">Loading...</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>


</div>

   
   
   </>
  )
}

export default Customers