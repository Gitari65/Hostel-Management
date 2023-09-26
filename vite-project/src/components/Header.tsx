import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <p className="mb-0">info@example.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <p className="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
    </header>
    </>
   
  );
};

export default Header;
