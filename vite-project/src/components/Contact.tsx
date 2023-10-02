import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWhatsapp, faTwitter} from '@fortawesome/free-brands-svg-icons'
/**use fontawsome icons as constants */







/***initialize wow */
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
import {faPhone } from '@fortawesome/free-solid-svg-icons'
/**use the icons */
/**const elementLocation = <FontAwesomeIcon icon={faMapMarkerAlt} />**/
const elementPhone = <FontAwesomeIcon icon={faPhone} />




class Contact extends React.Component {
 
    render() {
     
    return (
      <div>
        
  
        <div className="container container-fluid text-center d-flex justify-content-center contact flex-column align align-items-center">

  <div className=" contact-socials row align-items-start animate__animated animate__bounceIn">

    <div className="col">
    <div className="card" style={{ width: '18rem' }}>
 <span> {elementPhone}</span>
  <div className="card-body">
    <h5 className="card-title">Call us</h5>

    
 <p className="card-text">+254 789 654</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{ width: '18rem' }}>
 <span> {whatsapp}</span>
  <div className="card-body">
    <h5 className="card-title">Whatsapp</h5>

    
 <p className="card-text">+254 789 654</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{ width: '18rem' }}>
 <span> {twitter}</span>
  <div className="card-body">
    <h5 className="card-title">Twitter</h5>

    
 <p className="card-text">+254 789 654</p>
  </div>
</div>
    </div>
  </div>

  
<div className="card d-flex justify-content-center contact-form" style={{width:" 60%"}} >
<div className="mb-3 row align-items-start d-flex justify-content-center " >
    <h1>Contact Us</h1>
<label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control w-50" id="exampleFormControlInput1" placeholder="your name"></input>
    
  <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
  <input type="email" className="form-control w-50 " id="exampleFormControlInput2" placeholder="name@example.com"></input>
</div>
<div className="mb-4 ">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Talk to Us</label>
<textarea className="form-control w-70" id="exampleFormControlTextarea1" placeholder='say something' rows={3}></textarea>
</div>
<div className="mb-4">
  <button type="button" className="btn btn-primary">Submit</button>
  </div>
  
</div>
  
</div>


  
      </div>
    )
  }
}
  
  export default Contact