// Add this inside the ProfilePage component, after the return statement
import React from 'react';

const Profilepage = () => {
const styles = {
    profileContainer: {
      textAlign: 'center',
      padding: '20px',
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
  
  // Update the return statement as follows:
  
  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img
          src="path-to-your-profile-pic.jpg"
          alt="Profile"
          style={styles.profilePic}
        />
        <h2 style={styles.profileName}>Your Name</h2>
      </div>
      <div style={styles.profileButtons}>
        <button style={styles.button} className="edit-profile-btn">
          Edit My Profile
        </button>
        <button style={styles.button} className="my-orders-btn">
          My Orders
        </button>
        <button style={styles.button} className="my-products-btn">
          My Products
        </button>
      </div>
    </div>
  );
}
export default Profilepage;