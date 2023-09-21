//import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/nice-select.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/slicknav.min.css'
import '../src/assets/css/jquery-ui.min.css'
import {Header,Home,Slider} from "../src/index"
function App() {
 

  return (
    <> 
    <Router>

<Header/>
<Routes>
  <Route path="/" element={
  <>
    
  <Slider/>
  </>

  }/>

</Routes>
</Router>
    </>
  )
}

export default App
