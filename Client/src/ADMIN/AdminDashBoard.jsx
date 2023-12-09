import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SV from './Admins.module.css';
import NabAds from './NabAds';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const AdminDashBoard = () => {

const Logins = useNavigate();


const alrts = () =>{
  let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
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

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/api/input')
      .then((response) => setContainers(response.data.foodItems))
      .catch((error) => console.error(error));
  }, []);

  /////////////////////End to retrieve///////////////////////////

  //////add items/////////////////
  const Inputsies = (e) => {
    e.preventDefault();
    const newData = {
      FoodName: items,
      Quantity: quantity,
    };
    Axios.post('http://127.0.0.1:8000/api/input', { cart: [newData] })
      .then((response) => {
        console.log(response.data);
        setContainers((prevData) => [...prevData, newData]);
      })
      .catch((error) => {
        console.log(error);
      });
   
    setItems(null);
    setQuantity(null);
 
  };
//////endadd items/////////////////

  ///////For delete///////////////////////////////////
    const handleDelete = (id) => {
      Axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
        .then((response) => {
          console.log(response.data);  
          setContainers((prevData) => prevData.filter((item) => item.id !== id));  
          success();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
  console.log(id)
        
    };
  
 ///////////////DELETE end???????????????////////////////
 
  return (
    <>
    <NabAds navs={Logins} alert={alrts}/>


    <div className={SV.MASTERS}>
     

      <div className={SV.TT}>
      <div>
        <span>ADD</span>
        <form onSubmit={Inputsies}>
          <input
            type="text"
            placeholder="ADD ITEMS"
            name="items"
            value={items || ''}
            onChange={(e) => setItems(e.target.value)}
          />
          <div>
            <input
              type="text"
              placeholder="ADD ITEMS"
              name="quantity"
              value={quantity || ''}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className={SV.BBB}>
              <button type="submit">submit</button>
            </span>
          </div>
        </form>
      </div>
 
      
      <TableContainer component={Paper}>
      <h1>Customers Orders</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foodname</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(container) && container.length > 0 ? (
                container.map((inso, index) => (
                  <TableRow key={index}>
                    <TableCell>{inso.FoodName}</TableCell>
                    <TableCell>{inso.Quantity}</TableCell>
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
      </div>
    </>
  );
};

export default AdminDashBoard;
