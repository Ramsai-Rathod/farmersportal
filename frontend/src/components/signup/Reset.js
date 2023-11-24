import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";


function Reset() {
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
				            Please enter your email address and we will send you a password reset link.
				        </p>
				        <div className="form-input">
							<span><FaEnvelope/></span>
							<input type="email" name="" placeholder="Email Address" tabIndex="10"required/>
						</div>
				        <div className="mb-3"> 
							<button type="submit" className="btn">Send Reset Link</button>
						</div>
				    </form>
				</div>
				<div className="reset-confirmation d-none px-3">
					<div className="mb-4">
						<h4 className="mb-3">Link was sent</h4>
					    <h6 style={{color:" #777"}}>Please, check your inbox for a password reset link.</h6>
					</div>
					<div className="mb-3">
					<Link to="/signin">
					    <button type="submit" className="btn">Login Now</button>
					</Link>
				</div>
			</div> 
			
			<div className="col-md-1 infinity-right-space"></div>
		</div>
    </div>
	</div>
    </div>
  )
}

export default Reset
