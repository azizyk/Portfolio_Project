import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <section className="footer">
    <div className="footer-border-line">
    </div>
    <div className="main-footer">
        <div className="footer-container">
            <div className="footer-logo">
                <h1 className="logo">Azy<span>Events</span></h1>
            </div>
            <div className="footer-title">
                <h4 className="footer-heading" sx={"text-align:center"}>ABOUT</h4>
                <p className="about-p" sx={"text-align: center;"}>The Ultimate experience is unparalleled. 
                    Our comprehensive event planning and design team will walk you through every step of the process, 
                    making sure a stress-free experience from beginning to end.</p>
            </div>
        
            <div className="footer-title">
                <h4 className="footer-heading">CONTACT US</h4>
                <p className="address">Bole Gerji TN 2100</p>
                <p className="address">+251 938127518</p>
                
            </div>


        </div>
    </div>
    <div className="footer-bar">
        <div className="copyright">
            {/* <!--
                <div className="footer-social">
                <a target="_blank" href="https://www.facebook.com/" 
                hidefocus="true" 
                style="outline: none;">
                <i className="fa fa-facebook-square"></i>
                </a> 
            </div> 
            -->*/}
            
            <div className="footer-copyright">
                <p>
                     Copyright © 2023 AzyEvents Event planning and design. 
                </p>
            </div>

        </div>

    </div>


</section>
  )
}

export default Footer