import React, { useState, useEffect } from 'react';
import NavigationBS from './NavigationBS';
import Tite from './TTite.module.css';
import axios from 'axios';
import Swal from 'sweetalert2'


const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []); 

  const handleDelete = (id) => {
   
    axios.delete(`http://127.0.0.1:8000/api/messages/${id}`)
      .then((response) => {
      
        setMessages(messages.filter(message => message.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
      });

      Swal.fire({
        title: "Succes delete",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

  };

  return (
    <>
      <NavigationBS />
      
      <div className={Tite.Mais}>
        <h1> Messages </h1>
        <div className={Tite.Register}></div>
        
        <div className={Tite.container}>
          {messages.map((inso) => (
            <div className={Tite.box} key={inso.id}>
              <p>name: {inso.name}</p>
              <p>email: {inso.email}</p>
              <p>contact: {inso.contact}</p>
              <p>message: <span className={Tite.msg}>{inso.message}</span></p>
              <div className={Tite["food-btn"]}>
                <button className={Tite.delete} onClick={() => handleDelete(inso.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Messages;