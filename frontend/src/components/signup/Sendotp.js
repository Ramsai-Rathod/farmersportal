import React, { useState } from 'react'
import './Signup.css'
import {  useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Sendotp() {
	const navigate=useNavigate();
	const[otp,setOtp]=useState("");
    const[password,setpassword]=useState("");
	const handler=async(e)=>{
		try {
			e.preventDefault();
			const res=await axios.post('/user/otp',{otp,password})
			if(res){
				toast.success(res.data, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					})
					setTimeout(() => {
						navigate('/signin')
					}, 3000);

			}
			
		} catch (error) {
			toast.error(error.response.data, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				})
		}
	}
  return (
    <div>
      <div className="container infinity-container">
		<div className="row">
			<div className="col-md-1 infinity-left-space"></div>

			<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
				<div className="text-center mb-3 mt-5">
				</div>
				<div className="reset-form d-block">
				    <form className="reset-password-form px-3">
				    	<h4>Reset Your password</h4>
				        <p className="mb-3" style={{color: "#777"}}>
				            Enter the OTP.
				        </p>
				        <div className="form-input">
							<span><FaEnvelope/></span>
                            <input type="number" name="otp" placeholder="OTP" tabIndex="10"required onChange={(e)=>{
								setOtp(e.target.value);
							}}/>
							<input type="password" name="password" placeholder="new password" tabIndex="10"required onChange={(e)=>{
								setpassword(e.target.value);
							}}/>
						</div>
				        <div className="mb-3"> 
							<button type="submit" className="btn" onClick={handler}>Send Reset Link</button>
						</div>
				    </form>
				</div>
			
			<div className="col-md-1 infinity-right-space"></div>
		</div>
    </div>
	</div>
	<ToastContainer />
    </div>
  )
}

export default Sendotp;
