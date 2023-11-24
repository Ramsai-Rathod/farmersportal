import {  useNavigate} from 'react-router-dom'
import React from 'react'
import './Home.css'
import HomeImage from "../images/home.jpg"
import image1 from "../images/image1.jpg"
import image3 from "../images/image3.jpg"
import image5 from "../images/image5.jpg"

function Home() {
  const navigate=useNavigate();
  const gotohere=()=>{
navigate('/signup');
  }
  return (
    <div>
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Farmers Crop Exchange: Connecting Farmers and Buyers for Direct Trade.
          </h1>
          <p className="primary-text">
          Discover Fresh, Sustainable Crops: Your Trusted Marketplace for Quality Produce.
          </p>
          <button className="secondary-button " onClick={()=>gotohere()}>
            SignUp {""}
          
          </button>
        </div>
        <div className="home-image-section">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
    <div className="about-section-container">
      <div className="about-section-image-container">
      <img src={image1} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        A Seamless Buying Experience
        </h1>
        <p className="primary-text">
        With our user-friendly interface and intuitive search functionality, finding the perfect crop has never been easier.
        </p>
        <p className="primary-text">
        Browse through a wide variety of crops, filter by location, quality, and quantity, and discover the produce that meets your specific requirements.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>

    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h2 className="primary-heading">
          Empowering Farmers,Communities:
          </h2>
          <p className="primary-text">
          We are committed to empowering farmers and supporting local communities. By eliminating intermediaries and enabling direct trade, Farmers Crop Exchange ensures that farmers receive fair prices for their hard work and dedication. 
          </p>
        </div>
        <div className="home-image-section">
          <img src={image3} alt="" />
        </div>
      </div>
    </div>

    <div className="about-section-container">
      <div className="about-section-image-container">
      <img src={image5} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Secure Transactions and Timely Delivery:
        </h1>
        <p className="primary-text">
        We understand the importance of secure transactions and timely delivery. Our platform provides a secure payment gateway, protecting your financial transactions and ensuring peace of mind. 
        </p>
        <p className="primary-text">
        We work closely with reliable logistics partners to streamline the delivery process, ensuring that your ordered crops reach you fresh and on time, wherever you are.
        </p>
      </div>
    </div>

    </div>
  )
}

export default Home
