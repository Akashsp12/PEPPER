import React, { Component } from 'react'
import '../FooterBar/FooterStyle.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id='StickyFooter' className="flex-shrink-0 py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small> &copy; 2022 Pepper. All Rights Reserved</small>
                    </div>
                </footer>
            </div>
        )
    }
}
