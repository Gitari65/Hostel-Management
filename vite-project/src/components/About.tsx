import React from 'react'
import CountUp from 'react-countup'
/**import room,client and staff like icons from font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faUsersCog, faUsers } from '@fortawesome/free-solid-svg-icons'
/**arrow right fontawesome */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/**import wow */

import 'wowjs/css/libs/animate.css'

/**use fontawsome icons as constants */
const hotel = <FontAwesomeIcon icon={faHotel} />
const usersCog = <FontAwesomeIcon icon={faUsersCog} />
const users = <FontAwesomeIcon icon={faUsers} />
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />



const About = () => {
  return (
    <>
  {/** <!-- About Start --> */} 
  <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5">
            <div className="container aboutus-start" >
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start  text-uppercase" id='aboutus-heading' >About Us</h6>
                        <h1 className="mb-4">Welcome to <span className=" text-uppercase">Plaza</span></h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <span id='icon-aboutus'> {hotel}</span>
                                        <h2 className="mb-1" data-toggle="counter-up"><CountUp start={0} end={200} duration={3}/></h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                       <span id='icon-aboutus'>{usersCog}</span> 
                                        <h2 className="mb-1" data-toggle="counter-up" ><CountUp start={0} end={10} duration={3}/></h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                       <span id='icon-aboutus'>{users}</span> 
                                        <h2 className="mb-1" data-toggle="counter-up"><CountUp start={0} end={1500} duration={3}/></h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn  py-3 px-5 mt-2" href="" id='aboutus-btn'>Explore More {arrowRight}</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/room/rooms-5.jpg" style={{marginTop: '25%'}}></img>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/room/rooms-3.jpg"></img>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/room/rooms-1.jpg"></img>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/room/rooms-4.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/**  <!-- About End -->*/} 


        {/**<!-- Team Start --> */} 
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                              <img className="img-fluid" src="img/team-1.jpg" alt="" />
                              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                              </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                              <h5 className="fw-bold mb-0">Full Name</h5>
                              <small>Designation</small>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                              <div className="rounded shadow overflow-hidden">
                                <div className="position-relative">
                                  <img className="img-fluid" src="img/staff/staff-5.jpg" alt="" />
                                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                  </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                  <h5 className="fw-bold mb-0">Full Name</h5>
                                  <small>Designation</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                              <div className="rounded shadow overflow-hidden">
                                <div className="position-relative">
                                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                  </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                  <h5 className="fw-bold mb-0">Full Name</h5>
                                  <small>Designation</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                              <div className="rounded shadow overflow-hidden">
                                <div className="position-relative">
                                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                  </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                  <h5 className="fw-bold mb-0">Full Name</h5>
                                  <small>Designation</small>
                                </div>
                              </div>
                            </div>
                            <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
                              <div className="row justify-content-center">
                                <div className="col-lg-10 border rounded p-1">
                                  <div className="border rounded text-center p-1">
                                    <div className="bg-white rounded text-center p-5">
                                      <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                                      <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"></input>
                                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Newsletter Start -->**/}
        <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="row justify-content-center">
                <div className="col-lg-10 border rounded p-1">
                    <div className="border rounded text-center p-1">
                        <div className="bg-white rounded text-center p-5">
                            <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                          
                            <input
                              className="form-control w-100 py-3 ps-4 pe-5"
                              type="text"
                              placeholder="Enter your email"
                              style={{ maxWidth: "400px" }} // Add the style property here
                            />
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"></input>
                                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       {/** <!-- Newsletter Start -->*/} 


    </>
  )
}

export default About