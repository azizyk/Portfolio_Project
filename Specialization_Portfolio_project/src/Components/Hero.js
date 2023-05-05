import React from 'react';
import '../Styles/Hero.css'


function Hero() {
  return (
    <>
<div className="hero">
            <img src="Images/hero.jpg"/>
            {/* <h1 className="logo">Azk<span>Events</span></h1>
            <div className="hero-btn">
                <button className="btn"></button> 

            </div> */}
       
          </div> 
                    <section className="content-container">
                    <div className="sub-content-container">
                        <div className="special-subtitle">UNPARALLELED, STRESS-FREE</div>
                            <div className="title">
                                <h3 className="special-title">EVENT PLANNING & DESIGN</h3>
                            </div>
                            <div className="text-box">
                                <p className="p1" sx={"text-align: center;"}>The Ultimate experience is unparalleled. Our comprehensive event planning 
                                    and design team will walk you through every step of the process, making sure a stress-free 
                                    experience from beginning to end.</p>
                                <p className="p2" sx={"text-align: center;"}>Customization is guaranteed when you work with us. 
                                    We will create a custom proposal tailored to your specific wants and needs from the beginning. 
                                    You'll be paired with an Infinity Event Team member who will work with you to realize your vision. 
                                    We will collaborate with some of the best vendors in Addis Abeba to handle all of the details such as meeting scheduling, 
                                    delivery dates, payments, day-of setup, and more.</p>
                                <p className="p3" sx={"text-align: center;"}>When the show begins, 
                                    our staff will work tirelessly to ensure that your event is seamless and unforgettable.</p>
                            </div>
                    </div>   
                  </section>
                  <section className="service-container">
                    <div className="sub-service-container">
                        <div className="service">
                            <h3 className="title-service">WEDDING</h3>
                            <img className="service-imgg" src="Images/wedding.jpg"/>
                            <p className="service-p" sx={"text-align: center;"}>We are here to make sure that the day you have always imagined will be the day you won't forget, 
                                with every last detail taken care of.</p>
                        </div>
                        <div className="service">
                            <h3 className="title-service">BIRTH DAY</h3>
                            <img className="service-imgg" src="Images/birthday.jpg"/>
                            <p className="service-p" sx={"text-align: center;"}>Your birthday is a wonderful day, 
                                so we'll do everything we can to make it one you and your loved ones will never forget.</p>
                        </div>
                        <div className="service">
                            <h3 clas="title-service">BRIDAL SHOWER</h3>
                            <img className="service-imgg" src="Images/brid to be.jpg"/>
                            <p className="service-p"  sx={"text-align: center;"}>A dedicated team will be with you all over the place to ensure that your bridal shower is one to remember.</p>
                        </div>
        
                    </div>
                    </section>
                    </>

           )
}

export default Hero