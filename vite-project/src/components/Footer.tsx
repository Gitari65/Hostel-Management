import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**import location phone/phone setup icons from fontawesome */
import { faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
/**use the icons */
const elementLocation = <FontAwesomeIcon icon={faMapMarkerAlt} />
const elementPhone = <FontAwesomeIcon icon={faPhone} />
const elementPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />



const Footer = () => {
  return (
    <div>
          {/** <!-- Footer Section Begin -->*/}  
    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-logo">
                        <a href="#"><img src="img/logo/plaza-hostel-logo.png" alt=""></img></a>
                    </div>
                </div>
            </div>
            <div className="row pb-50">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <h5>Location</h5>
                        <div className="widget-text">
                            {elementLocation}
                            <p>Nyeri-Nyahururu Highway, <br />Nyeri, Kenya</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <h5>Reception</h5>
                        <div className="widget-text">
                           {elementPhoneAlt}
                            <p>+1 (603)535-4592</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <h5>Shuttle Service</h5>
                        <div className="widget-text">
                           {elementPhone}
                            <p>+254 ()123-245-67</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-footer-widget">
                        <h5>Restaurant</h5>
                        <div className="widget-text">
                            {elementPhoneAlt}
                            <p>+254 7685 899</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-text">

                </div>
                <div className="privacy-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Photo Requests</a>
                </div>
            </div>
        </div>
    </footer>
   {/**<!-- Footer Section End --> */} 

    </div>
  )
}

export default Footer