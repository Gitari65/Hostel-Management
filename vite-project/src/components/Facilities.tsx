import React from 'react'



class Facilities extends React.Component {
      
     render() {
  return (
    
    <div>
        
   {/*<!-- Facilities Section Begin -->**/} 
    <div className="facilities-section spad">
        <div className="container">
            <div className="facilities-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h1>Facilities</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="facilities-img set-bg" data-setbg="/img/screenTv.jpg"></div>
                    </div>
                    <div className="col-lg-6 p-0 ">
                        <div className="facilities-text-warp">
                            <div className="facilities-text">
                                <h2>Entertainment Center</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis-cing elit. Mauris tincidunt consectetur
                                    turpis, eget consequat.</p>
                                <a href="#" className="primary-btn fac-btn">Visit Center <i className="lnr lnr-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 order-lg-1 order-2">
                        <div className="facilities-text-warp">
                            <div className="facilities-text">
                                <h2>Wellness Center</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis-cing elit. Mauris tincidunt consectetur
                                    turpis, eget consequat.</p>
                                <a href="#" className="primary-btn fac-btn">Visit Center <i className="lnr lnr-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 order-lg-2 order-1">
                        <div className="facilities-img set-bg" data-setbg="/img/facilities-2.jpg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/**<!-- Facilities Section End --> */} 
    </div>
  )
}
}

export default Facilities