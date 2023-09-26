import React from 'react'
import '../assets/css/style.css'

const Slider = () => {
  return (
 
        <>
        <head>
        
        </head>
         {/* <!-- Hero Section Begin --> */}
         <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/img/building-pic3.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block slider-info animated slideInDown">
        <h5>The Plaza Hostels   </h5>
        <p> Welcome</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/img/building-pic2.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block slider-info">
        <h5> Clean Environment</h5>
        <p>Experience a quite clean environment suitable for studying.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/img/room-1.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block slider-info">
        <h5>24/7 Security</h5>
        <p>Plaza Hostels are well secured 24/7.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* <!-- Hero Section End --> */}


</>
  )
}

export default Slider;