import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import instagram,facebook,twitter,linkedin,youtube icons
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram,faFacebook,faTwitter,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
//import call and email icons
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'



// You can now use the imported icons in your code
const elementInsta = <FontAwesomeIcon icon={faInstagram} />
const elementFace = <FontAwesomeIcon icon={faFacebook} />
const elementTwit = <FontAwesomeIcon icon={faTwitter} />
const elementLink = <FontAwesomeIcon icon={faLinkedin} />
const elementYou = <FontAwesomeIcon icon={faYoutube} />
const elementCall = <FontAwesomeIcon icon={faPhoneAlt} />
const elementMail = <FontAwesomeIcon icon={faEnvelope} />


// const element = <FontAwesomeIcon icon={faCoffee} />
// const elementInsta = <FontAwesomeIcon icon={faInstagram} />
// const elementFace = <FontAwesomeIcon icon={faFacebook} />
// const elementTwit = <FontAwesomeIcon icon={faTwitter} />
// const elementLink = <FontAwesomeIcon icon={faLinkedin} />
// const elementYou = <FontAwesomeIcon icon={faYoutube} />

 
const Header = () => {
  return (
    <>
    <title>Plaza Hostel</title>
     <header className="header-section">
      <div className="container-fluid">
        <div className="inner-header">
          <div className="logo">
        
            <Link  to="/">
              <img className='hostel-logo' src="img/logo/plaza-hostel-logo.png" alt="Logo"  />
            </Link>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <nav className="main-menu mobile-menu" >
                  <ul>
                    <li>
                      <Link to="/" className="nav-links"  >Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="nav-links"  >About</Link>
                    </li>
                    <li>
                      <Link to="/rooms" className="nav-links"  >Rooms</Link>
                    </li>
                    <li>
                      <Link to="/facilities" className="nav-links" >Facilities</Link>
                      <ul className="drop-menu">
                        <li>
                          <Link  to="/junior-suite">Junior Suite</Link>
                        </li>
                        <li>
                          <Link to="/double-room">Double Room</Link>
                        </li>
                        <li>
                          <Link to="/senior-suite">Senior Suite</Link>
                        </li>
                        <li>
                          <Link to="/single-room">Single Room</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="nav-links"  to="/news"  >News</Link>
                    </li>
                    <li>
                      <Link className="nav-links"  to="/contact" >Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="top-info">
                  <img src="../img/placeholder.png" alt="Location" />
                  <span>Plaza Hostel, Dekut, NYERI</span>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
      <div className="row gx-0 bg-white d-none d-lg-flex contact-nav-info">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                {elementMail}
                                <p className="mb-0">plazahostels@gmail.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                {elementCall}
                                <p className="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href="">{elementInsta}</a>
                                <a className="me-3" href="">{elementTwit}</a>
                                <a className="me-3" href="">{elementLink}</a>
                                <a className="me-3" href="">{elementFace} </a>
                                <a className="" href="">{elementYou}</a>
                            </div>
                        </div>
                    </div>
    </header>
    </>
   
  );
};

export default Header;
