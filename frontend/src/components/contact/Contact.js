import React from 'react'
import './Contact.css'
import ContactImage from './contactimage.jpg'
import { GiFarmer } from "react-icons/gi";
import { Link} from 'react-router-dom';

function Contact() {
  return (
    <div>
       <nav className="navbar  navbar-light bg-light ">
      <div className="container">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/" ><GiFarmer/>FarmersLink</Link>
        </div>
      </div>
    </nav>

    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1 className="mb-5">Contact Us</h1>
          <form
            action="https://formsubmit.co/3639a83e5394d40d58643c6908de4150"
            method="POST"
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input name="name" type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input name="email" type="email" className="form-control" required />
              <div id="emailHelp" className="form-text">
                Don't worry, we won't share it with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone (optional)</label>
              <input name="phone"  className="form-control" />
              <div id="phoneHelp" className="form-text">
                If you rather talk to a human directly.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>

        <div className="col-1"></div>

        <div className="col-6 position-relative">
          <img src={ContactImage} alt='/'
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
