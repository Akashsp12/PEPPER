import React, { useState,useEffect} from 'react'

import '../ContactPage/ContactusStyle.css'


const {AddContactApi}=require('../../API/Contactapi')



const Contactus = () => {

    const inital = {
        contactName: '',
        ContactEmail: '',
        ContactPhone: '',
        ContactMsg: '',
    }

    const [Contact, setContact] = useState(inital)
    const {
        ContactName,
        ContactEmail,
        ContactPhone,
        ContactMsg,
    } = Contact

    const changHandler = (e) => {
        setContact({ ...Contact, [e.target.name]: e.target.value })

    }

    const ContactSubmiHandler = async (e) => {

        await AddContactApi(Contact)

    }






    return (
        <div>
            <>
                <div class="container">
                    <div class="screen">

                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div class="app-contact">CONTACT INFO : 123456789</div>
                            </div>
                            <div class="screen-body-item">
                                <form method='' action="" >
                                    <div class="app-form">
                                        <div class="app-form-group">
                                            <input
                                                class="app-form-control"
                                                placeholder="NAME"
                                                name='ContactName'
                                                onChange={(e) => changHandler(e)}
                                                value={ContactName} />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control"
                                                placeholder="EMAIL"
                                                name='ContactEmail'
                                                onChange={(e) => changHandler(e)}
                                                value={ContactEmail} />
                                        </div>
                                        <div class="app-form-group">
                                            <input
                                                class="app-form-control"
                                                placeholder="CONTACT NO"
                                                name='ContactPhone'
                                                onChange={(e) => changHandler(e)}
                                                value={ContactPhone} />
                                        </div>
                                        <div class="app-form-group message">
                                            <input
                                                class="app-form-control"
                                                placeholder="MESSAGE"
                                                name='ContactMsg'
                                                onChange={(e) => changHandler(e)}
                                                value={ContactMsg} />
                                        </div>
                                        <div class="app-form-group buttons">

                                            <button
                                                class="app-form-button"
                                                onClick={() => ContactSubmiHandler()}>SEND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </div>
    )
}

export default Contactus