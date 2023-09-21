import React from 'react'
import '../assets/css/style.css'

const Slider = () => {
  return (
    <div>
     
        {/* <!-- Hero Section Begin --> */}
        

    <div className="hero-slider">
        <div className="slider-item">
            <div className="single-slider-item set-bg" data-setbg="img/slider-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>We hope you’ll enjoy <br />your stay.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-nav">
                                <a href="#" className="single-slider-nav">
                                    <img src="img/nav-1.jpg" alt=""></img>
                                    <div className="nav-text active">
                                        <p>Pool<i className="lnr lnr-arrow-right"></i></p>
                                    </div>
                                </a>
                                <a href="#" className="single-slider-nav">
                                    <img src="img/nav-2.jpg" alt=""></img>
                                    <div className="nav-text">
                                        <p>Sauna<i className="lnr lnr-arrow-right"></i></p>
                                    </div>
                                </a>
                                <a href="#" className="single-slider-nav last">
                                    <img src="img/nav-3.jpg" alt=""></img>
                                    <div className="nav-text">
                                        <p>Restaurant<i className="lnr lnr-arrow-right"></i></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

    </div>
  )
}

export default Slider