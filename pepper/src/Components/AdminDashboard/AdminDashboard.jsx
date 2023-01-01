
import { Link, Outlet } from "react-router-dom";
import '../AdminDashboard/AdminDashboardStyle.css'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Go from "react-icons/go";
import  * as Hi from "react-icons/hi";
import * as Bi from "react-icons/bi";
import * as MDIcons from "react-icons/md";
// import * as GiIcons from "react-icons/gi";
// import * as VSCIcons from "react-icons/vsc";
import React from 'react'

const AdminDashboard = () => {
  return (
    <>
        <div class="container-fluid  Admindash ">
          <div class="row flex-nowrap ">
          
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 mr-3 dash1">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span class="fs-5 d-none d-sm-inline Dashlogo">pepper</span>
                </Link>
                <ul class="nav nav-pills flex-column mb-sm-auto mbpe-0 align-items-center align-items-sm-start Dashul" id="menu">
                  <li class="nav-item">

                    <Link to='/AdminDash/AdminHome' class="nav-link px-0 align-middle DashLink"><AiIcons.AiOutlineHome/> <span class="ms-1 d-none d-sm-inline">Home</span></Link>

                  </li>
                  
                  <li>
                    <Link to='/AdminDash/AdminProductAdd' class="nav-link px-0 align-middle DashLink" >
                      <Bi.BiFoodMenu/> <span class="ms-1 d-none d-sm-inline"> Add Menu</span></Link>
                  </li>
                  <li>
                    <Link to='/AdminDash/AdminProductupdate' class="nav-link px-0 align-middle DashLink" >
                      <Bi.BiFoodMenu/> <span class="ms-1 d-none d-sm-inline"> Menu Update</span></Link>
                  </li>
                  <li>
                    <Link to="/AdminDash/AdminOrders" data-bs-toggle="collapse" class="nav-link px-0 align-middle DashLink ">
                      <Go.GoPackage/> <span class="ms-1 d-none d-sm-inline"> Orders</span></Link>
                    
                  </li>
                
                 
                  <li>
                    <Link to="/AdminDash/AdminUserEdit" class="nav-link px-0 align-middle DashLink">
                     <Hi.HiUserGroup/> <span class="ms-1 d-none d-sm-inline">Users</span> </Link>
                  </li>
                  <li>
                    <Link to="/AdminDash/AdminContactList" class="nav-link px-0 align-middle DashLink">
                     <MDIcons.MdContacts/> <span class="ms-1 d-none d-sm-inline">Contact List</span> </Link>
                  </li>
                </ul>
                <hr />
                

              </div>
            </div>
            <div class="col dash2">
              <Outlet />

            </div>
           

          </div>
        </div>
      </>
  )
}

export default AdminDashboard