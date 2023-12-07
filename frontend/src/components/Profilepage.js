// Add this inside the ProfilePage component, after the return statement
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Profilepage = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({});
const styles = {
    profileContainer: {
      textAlign: 'center',
      padding: '20px',
      margin:'100px',
      backgroundColor: '#fff',
    },
    profileHeader: {
      marginBottom: '20px',
    },
    profilePic: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    profileName: {
      color: '#17ba7e',
      margin: '10px 0',
    },
    profileButtons: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 20px',
      margin: '0 10px',
      backgroundColor: '#17ba7e',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  const getdata=async()=>{
    const response=await axios.get('/user/profile')
   setUser(response.data)
   
  }
  useEffect(() => {
  getdata();
  }, [user])
  
  // Update the return statement as follows:
  
  return (
    <>
   {
    user&&
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img
          src={`/userprofiles/${user.profile}`}
          alt="Profile"
          style={styles.profilePic}
        />
         <h1 style={styles.profileName}>
      {user.catageory}
      </h1>
      <h1 style={styles.profileName}>User:{user.username}
      </h1>
      <h1 style={styles.profileName}>
      Gmail:{user.gmail}
      </h1>
      </div>
      <div style={styles.profileButtons}>
        <button style={styles.button} className="edit-profile-btn">
          Edit My Profile
        </button>
        <button style={styles.button} className="my-orders-btn" onClick={()=>navigate("/orderpage")}>
        
          My Orders
         
        </button>
        <button style={styles.button} className="my-products-btn" onClick={()=>navigate('/addproducts')}>
         
          My Products
         
        </button>
      </div>
    </div>
   }
   </>
  );
}
export default Profilepage;