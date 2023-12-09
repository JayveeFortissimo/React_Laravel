import React, { useState,useEffect } from 'react';
import NavBarMain from '../Items/NavBarMain';
import Profiles from '../PROFILE/Profiles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  // useStates for function
  const [imageSrc, setImageSrc] = useState(null);
  const [subcontainer,setsubcontainer] = useState([]);
  const [container, setContainers] = useState([]);
  const logout = useNavigate();

  //useEffect and axios to get a data from back end///
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

//Function for the input a picture
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };


  return (
    <>
      <NavBarMain />
      
      <div className={Profiles.parentRoot}>

        <div className={Profiles.BOX}>

          <div className={Profiles.PR1}>
            {imageSrc && <img src={imageSrc} alt="Profile Image" />}
          </div>


          <div className={Profiles.LILI}>
          <input type="file" onChange={handleFileChange} />


          <div style={{ marginTop:'10px' }}>
 {subcontainer.map(inso =>{
        return(
            <div key={inso.id}>
                 <h3>Name: </h3>
                 <p>{inso.name}</p>
          <h3>Address: </h3>
          <p>{inso.address}</p>
          <h3>Contact: </h3>
          <p>{inso.contact_number}</p>
          <h3>Password:</h3>
          *************
          <div className={Profiles.BBB}>
            <button onClick={()=>logout('/')}>Log out</button>
          </div>
        </div>
        )
     })}
          </div>
    
          </div>
          


        </div>

        <div className={Profiles.BOX1}>

            <div style={{ height:'4rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>History Of transaction</h1>
            </div>
         

          <table style={{ width:'40rem',padding:'10px' }}>
            <tbody>
              <tr className={Profiles.tr1}>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
             
              </tr>
              {Array.isArray(container) && container.length > 0 ? (
      container.map((inso, index) => (
        <tr key={index} >
          <td >{inso.FoodName}</td>
          <td >{inso.Quantity}</td>
          <td >{inso.Price !== undefined ? inso.Price : 'N/A'}</td>
               
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
      </div>
    </>
  );
};

export default Profile;
