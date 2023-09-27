
const Contact = () => {
    return (
      <div>
        
  
   
  
    {/**<!-- Hero Section Begin -->*/ }  
      <section className="hero-section set-bg" data-setbg="img/contact-bg.jpg">
          <div className="hero-text">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <h1>Contact</h1>
                      </div>
                  </div>
                  <div className="page-nav">
                      <a href="./news.html" className="left-nav"><i className="lnr lnr-arrow-left"></i> News</a>
                  </div>
              </div>
          </div>
      </section>
      {/*<!-- Hero Section End -->*/} 
  
     {/* <!-- Contact Section Begin -->*/} 
      <section className="contact-section spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="contact-left">
                          <div className="contact-information">
                              <h2>Contact Information</h2>
                              <ul>
                                  <li><img src="img/placeholder-copy.png" alt=""> </img><span>1525 Boring Lane, Los Angeles,
                                          CA</span></li>
                                  <li><img src="img/phone-copy.png" alt=""> </img><span>+1 (603)535-4592</span></li>
                                  <li><img src="img/envelop.png" alt=""></img> <span>hello@youremail.com</span></li>
                                  <li><img src="img/clock-copy.png" alt=""></img> <span>Everyday: 06:00 -22:00</span></li>
                              </ul>
                          </div>
                          <div className="social-links">
                              <h2>Follow us on:</h2>
                              <a href="#"><i className="fa fa-facebook"></i></a>
                              <a href="#"><i className="fa fa-instagram"></i></a>
                              <a href="#"><i className="fa fa-linkedin"></i></a>
                              <a href="#"><i className="fa fa-pinterest"></i></a>
                              <a href="#"><i className="fa fa-twitter"></i></a>
                              <a href="#"><i className="fa fa-youtube-play"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="contact-form">
                          <h5>Write us ...</h5>
                          <form action="#">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <p>From</p>
                                      <div className="input-group">
                                          <input type="text" placeholder="Full Name"></input>
                                          <img src="img/edit.png" alt=""></img>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="input-group">
                                          <input type="email" placeholder="Email"></input>
                                          <img src="img/envelop-copy.png" alt=""></img>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="input-group phone-num">
                                          <input type="text" placeholder="Phone"></input>
                                          <img src="img/phone-copy.png" alt=""></img>
                                      </div>
                                  </div>
                                  <div className="col-lg-12">
                                      <div className="message">
                                          <p>Message</p>
                                          <div className="textarea">
                                              <textarea placeholder="Hi ..."></textarea>
                                              <img src="img/speech-copy.png" alt=""></img>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-12">
                                      <button type="submit">Send <i className="lnr lnr-arrow-right"></i></button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
     {/*** <!-- Contact Section End --> */}
  
      {/*<!-- Map Section Begin -->*/}
      <div className="map" id='map'>
         
      </div>
      {/*<!-- Map Section End -->*/}
  
  
  
     {/** <!-- Js Plugins --> */}
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/jquery-ui.min.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/jquery.slicknav.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/main.js"></script>
  
      </div>
    )
  }
  
  export default Contact