import '../RegisterandLogin/SignupStyle.css'

import { Link } from 'react-router-dom'

import React, { useState } from 'react'
const {AddUserApi} =require('../../API/RegAndLogApi')

const SignupPage = () => {
    // register page
    const inital = {
        UserName: "",
        UserEmail: "",
        Userpassword: '',

    }
    const [User, setUser] = useState(inital)
    const {
        UserName,
        UserEmail,
        Userpassword,

    } = User
    const onchangeHandler=(e)=>{
        setUser({ ...User, [e.target.name]: e.target.value })
    }

    const UserSubmithandler = async() => {
      
       await AddUserApi(User)
          
    }





    // end Registerpage




































    return (
        <div>
            <div>


                <div class="section accountpage">
                    <div class="container-fluid">
                        <div class="row full-height justify-content-center">
                            <div class="col-12 text-center align-self-center py-5">
                                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className='checkbox' type="checkbox" id="reg-log" name="reg-log" />
                                    <label for="reg-log"></label>
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="center-wrap">
                                                    <form action="" method="post">
                                                        <div class="section text-center">
                                                            <h4 class="mb-4 pb-3">Log In</h4>
                                                            <div class="form-group">
                                                                <input type="text"
                                                                    name="UserName"
                                                                    class="form-style"
                                                                    placeholder="Your Username"
                                                                    autocomplete="off" />
                                                                <i class="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div class="form-group mt-2">
                                                                <input type="password"
                                                                    name="UserPass"
                                                                    class="form-style"
                                                                    placeholder="Your Password"
                                                                    autocomplete="off" />
                                                                <i class="input-icon uil uil-lock-alt"></i>
                                                            </div>
                                                            <button
                                                                class="signupbtn mt-4"
                                                                type='Submit'>Submit</button>
                                                            <p class="mb-0 mt-4 text-center"><Link to="#0" class="link">Forgot your password?</Link></p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="card-back">
                                                <div class="center-wrap">
                                                    <form action="" method="" >

                                                        <div class="section text-center">
                                                            <h4 class="mb-4 pb-3">Sign Up</h4>
                                                            <div class="form-group">
                                                                <input type="text"
                                                                    name="UserName"
                                                                    class="form-style"
                                                                    placeholder="Your UserName"
                                                                    value={UserName}
                                                                    autocomplete="off" required 
                                                                    onChange={(e)=>onchangeHandler(e)}/>

                                                            </div>
                                                            <div class="form-group mt-2">
                                                                <input type="email"
                                                                    name="UserEmail"
                                                                    class="form-style"
                                                                    placeholder="Your Email"
                                                                    autocomplete="off" required
                                                                    value={UserEmail} 
                                                                    onChange={(e)=>onchangeHandler(e)}/>

                                                            </div>
                                                            <div class="form-group mt-2">
                                                            <input type="password"
                                                                    name="Userpassword"
                                                                    class="form-style"
                                                                    placeholder="Your password"
                                                                    autocomplete="off" required
                                                                    value={Userpassword} 
                                                                    onChange={(e)=>onchangeHandler(e)}/>

                                                            </div>
                                                            <button  class="signupbtn mt-4"
                                                           onClick={() => UserSubmithandler()}>submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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

export default SignupPage