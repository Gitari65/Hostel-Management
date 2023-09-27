import React from 'react'

/**import arrow right from fontawesome  */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// You can now use the imported icons in your code
const elementArrow = <FontAwesomeIcon icon={faArrowRight} />
/**import pooltable/balls from fontwaesome */
import { faFootball } from '@fortawesome/free-solid-svg-icons'
const elementPool = <FontAwesomeIcon icon={faFootball} />
/**import wifi,entertainment,tv,student icons from fontawesome */
import { faWifi, faTv, faGamepad, faUserGraduate,faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
const elementWifi = <FontAwesomeIcon icon={faWifi} />
const elementTv = <FontAwesomeIcon icon={faTv} />
const elementGame = <FontAwesomeIcon icon={faGamepad} />
const elementStudent = <FontAwesomeIcon icon={faPeopleRoof} />



const Booking = () => {
  return (
    <div>
         {/**<!-- Room Availability Section Begin -->**/}
    <section className="room-availability spad">
        <div className="container">
            <div className="room-check">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="room-items">
                            <div id="carouselExampleControls" className=" room-pic-slider room-pic-item carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                         <div className="carousel-item active">
                                         <img className="d-block w-100" src="img/room-slider/room-3.jpg" alt="First slide"></img>
                                        </div>
                                     <div className="carousel-item">
                                         <img className="d-block w-100" src="/img/screenTv.jpg" alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                             <img className="d-block w-100" src="/img/pooltable.jpg" alt="Third slide"></img>
                                    </div>
                             </div>
                                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                                 </a>
                                 <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
                             <span className="sr-only">Next</span>
                             </a>
                            </div>
                            <div className="room-text">
                                <div className="room-title">
                                    <h2>Student Suite</h2>
                                    <div className="room-price">
                                        <span>From</span>
                                        <h2>$252</h2>
                                    </div>
                                </div>
                                <div className="room-features">
                                    <div className="room-info">
                                        {elementTv}
                                        <span>Smart TV</span>
                                    </div>
                                    <div className="room-info">
                                    {elementWifi}
                                        <span>High Wi-fii</span>
                                    </div>
                                    <div className="room-info">
                                        {elementGame}
                                        <span>Games</span>
                                    </div>
                                    <div className="room-info">
                                        {
                                            elementStudent
                                        }
                                        <span>Chill Spot</span>
                                    </div>
                                    <div className="room-info last">
                                        {elementPool}
                                        <span>Pool Table</span>
                                    </div>
                                </div>
                            </div>
                       
                        </div>

                    </div>



                    <div className="col-lg-6">
                        <div className="check-form">
                            <h2>Check Availability</h2>
                            <form action="#">
                                <div className="datepicker">
                                    <div className="date-select">
                                        <p>From</p>
                                        <input type="text" className="datepicker-1" value="dd / mm / yyyy"></input>
                                        <img src="img/calendar.png" alt=""></img>
                                    </div>
                                    <div className="date-select to">
                                        <p>To</p>
                                        <input type="text" className="datepicker-2" value="dd / mm / yyyy"></input>
                                        <img src="img/calendar.png" alt=""></img>
                                    </div>
                                </div>
                                <div className="room-quantity">
                                  
                                    <div className="single-quantity last">
                                        <p>Rooms</p>
                                        <div className="pro-qty"><input type="text" value="0"></input></div>
                                    </div>
                                </div>
                                <div className="room-selector">
                                    <p>Room</p>
                                    <select className="suit-select">
                                        <option>Eg. Bed Seater</option>
                                        <option value="">Bed Seater</option>
                                        <option value="">Single Room</option>
                                       
                                    </select>
                                </div>
                                <button type="button">CHECK Availability {elementArrow}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-room">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h2>“Customers may forget what you said  but they will never forget how you made themfeel”.</h2>
                    </div>
                </div>
                <div className="about-para">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris,
                                bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum
                                ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae
                                orci. Suspendisse maximus malesuada</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est.
                                Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam.
                                Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum
                                magna </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {
    /**<!-- Room Availability Section End --> */ 
   }
    </div>
  )
}

export default Booking