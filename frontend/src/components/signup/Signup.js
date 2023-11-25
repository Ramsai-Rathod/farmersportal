import React, { useState } from 'react'
import './Signup.css'
// import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaLock,FaTwitter,FaGoogle,FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Signup() {
	const navigate=useNavigate()
	const [user,setUser]=useState({
		username:"",
		gmail:"",
		phoneno:"",
		password:"",
		catageory:""
	})
	
	
	const signupsubmit=async(e)=>{
		try{
			e.preventDefault();
		 await axios.post('/user/register',user)
		 .then(res=>{
			toast.success("user created successfully!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				})
				setTimeout(
					navigate('/signin')
					,3000)
			
			setUser({
		username:"",
		gmail:"",
		phoneno:"",
		password:"",
		catageory:""
			})
		 })
		 .catch(err=>{
			console.log(err.response.data)
			toast.error(err.response.data, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				})
		 });
	}catch(err){
		
			toast.error(err, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
	}

	}

  return (
	<>
    <div>
      <div  className="container infinity-container">
		    <div  className="row">
			  <div  className="col-md-1 infinity-left-space"></div>

			  {/* <!-- FORM BEGIN --> */}
			  <div  className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
				  {/* <!-- Company Logo --> */}
				  <div  className="text-center mb-3 mt-5">
				  </div>
				  <div  className="text-center mb-4">
					  <h4>Create an account</h4>
				  </div>
				  {/* <!-- Form --> */}
				  <form  className="px-3" onSubmit={signupsubmit}>
					  {/* <!-- Input Box --> */}
					  <div  className="form-input">
						  <span><FaUser/></span>
						  <input type="text" name="username" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}} 
						  placeholder="Full Name" tabIndex="10"/>
					  </div>
					  <div  className="form-input">
						  <span><FaEnvelope/></span>
						  <input type="email" name="gmail" value={user.gmail} onChange={(e)=>{setUser({...user,gmail:e.target.value})}}
						  placeholder="Email Address" tabIndex="10"/>
					  </div>
					  <div  className="form-input">
						  <span><FaLock /></span>
						  <input type="password" name="password"
						  value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}
						   placeholder="Password" />
					  </div>
					  <div  className="form-input">
						  <span><FaLock /></span>
						  <input type="phoneno" name="phoneno"
						  value={user.phoneno} onChange={(e)=>{setUser({...user,phoneno:e.target.value})}}
						   placeholder="phoneno" />
					  </div>
					  <div  className="form-input">
						  <span><FaLock /></span>
						  <input type="catageory" name="catageory"
						  value={user.catageory} onChange={(e)=>{setUser({...user,catageory:e.target.value})}}
						   placeholder="catageory" />
					  </div>
					  {/* <!-- Register Button --> */}
		        <div  className="mb-3"> 
						  <button type="submit"  className="btn btn-block" >Register</button>
					  </div>
					  <div  className="text-center mb-2">
	          <div  className="text-center mb-3" style={{color:" #777"}}>or register with</div>

	          {/* <!-- Facebook Button --> */}
	          <Link to=""  className="btn btn-social btn-facebook"><FaFacebook /></Link>

            {/* <!-- Google Button --> */}
						<Link to=""  className="btn btn-social btn-google"><FaGoogle /></Link>

						{/* <!-- Twitter Button --> */}
						<Link to=""  className="btn btn-social btn-twitter"><FaTwitter/></Link>
					  </div>
					<div  className="text-center mb-5" style={{color:" #777"}}>Already have an account? 
						<Link  className="login-link" to="/signin">Login here</Link>
			    </div>
				  </form>
			  </div>
			{/* <!-- FORM END --> */}

			<div  className="col-md-1 infinity-right-space"></div>
		    </div>
	    </div>
    </div>
	 <ToastContainer />
	 </>
  )
}

export default Signup
