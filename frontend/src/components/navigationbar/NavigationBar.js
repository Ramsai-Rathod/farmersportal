import React from 'react';
import { Link} from 'react-router-dom';
import './NavigationBar.css'
import { RiLoginCircleFill } from "react-icons/ri";
import { GiFarmer } from "react-icons/gi";
import Datacontext from '../../context/Datacontext';
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import { FaCartArrowDown } from "react-icons/fa";

function NavigationBar(){
    const cont=useContext(Datacontext);
  return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2 navbb">
                    <div className='logo'>
                        <Link className="navbar-brand" to="/" ><GiFarmer/>FarmersLink</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center ">
                            <li className="nav-item ">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                            <div className="mx-3 login">
                            {
                                cont.loggedin===false?(
                                <li className="nav-item">
                                <Link className="nav-link" to="/signin">Login<RiLoginCircleFill/></Link>
                            </li>):
                            (<>
                                <li className="nav-link added profile" >
                                <Link className="nav-link insiz" to="/profile">
                                <CgProfile />
                                </Link>
                                </li>
                                <li className="nav-link added cart" >
                                <Link className="nav-link insiz" to="/cart">
                                    <FaCartArrowDown /></Link>
                                </li>
                                </>
                            )
                            }
                            </div>
                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>
    </div>
 
    )
}
export default NavigationBar