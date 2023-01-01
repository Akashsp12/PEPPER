




import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Contactus from './Components/ContactPage/Contactus'

import SignupPage from "./Components/RegisterandLogin/SignupPage";
import Footer from "./Components/FooterBar/Footer";

import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import ProductPage from './Components/ProductPage/ProductPage'
import Homepage from './Components/HomePage/Homepage'
import AboutUs from "./Components/Aboutus/AboutUs";
import AdminHome from "./Components/AdminDashboard/ADminHome/AdminHome";
import AdminProductAdd from "./Components/AdminDashboard/AdminProductAdd/AdminProductAdd";
import AdminUser from "./Components/AdminDashboard/AdminUser/AdminUser";

import UpdateProduct from "./Components/AdminDashboard/AdminproductUpaate/UpdateProduct";
import Adminorders from "./Components/AdminDashboard/AdminproductUpaate/Adminorders";
import AdminContactList from "./Components/AdminDashboard/AdminContactList/AdminContactList";
// import Updatemenu from "./Components/AdminDashboard/AdminproductUpaate/Updatemenu";
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>



          <Navbar />

          <Routes>
            <Route path='' element={<Homepage />}></Route>
            <Route path='/menu' element={<ProductPage />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            <Route path='/Contactus' element={<Contactus />}></Route>

            <Route path='/AdminDash' element={<AdminDashboard />}>
              <Route path='/AdminDash/AdminHome' element={<AdminHome />}></Route>
              <Route path='/AdminDash/AdminProductAdd' element={<AdminProductAdd />}></Route>
              <Route path='/AdminDash/AdminUserEdit' element={<AdminUser />}></Route>
              <Route path='/AdminDash/AdminOrders' element={<AdminUser />}></Route>
              <Route path='/AdminDash/AdminProductupdate' element={<Adminorders />}>
              
              </Route>
              <Route path='/AdminDash/AdminContactList' element={<AdminContactList />}>
           
              </Route>
              
            </Route>
            <Route path='/Signup' element={<SignupPage />}></Route>
            <Route path={'/Edit/:id'} element={<UpdateProduct />}>
               </Route>


          </Routes>





          <Footer />




        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
