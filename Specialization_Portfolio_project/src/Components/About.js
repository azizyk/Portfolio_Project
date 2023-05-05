import React from 'react'
import '../Styles/About.css';
function About() {
  return (
    <>
    <div className="about-hero">
        
    <img src="Images/dark-rose.jpg"/>
    <div className="sub-title">
               <h5>ABOUT US</h5>  
               <h2>POSSIBILITIES ARE ENDLESS</h2>
            </div> 
    </div>
<section className="about-main-container">
<div className="about-sub-content-container">

    <div className="about-title">
        <h3 className="special-title">POSSIBILITIES ARE ENDLESS</h3>
    </div>
    <div className="text-box">
        <p className="p1" sx={"text-align: center;"}>AzyEvents was founded in 2022 as a result of a passion for dynamic events and decore.
             Our goal is to provide unrivaled event services and exceptional customer service.</p>
        <p className="p2" sx={"text-align: center;"}>Why AzyEvents ? Because with us, the possibilities are limitless. 
            We are dedicated to creating one-of-a-kind events that your guests will remember for years to come, 
            no matter how big or small. Customization is guaranteed, from your floor plan to your regular menu and signature lounge furniture.</p>
        <p className="p3" sx={"text-align: center;"}>We collaborate with the best vendors in the Addis Abeba area to provide planning 
            and design services at the venue of your dreams, as well as full service at the friendship park Event Spaces.</p>
    </div>
</div>  
</section>
<section className="service-main-container">
<div className="service-main-title">
<h2 className="event-service-title">EVENT SERVICES</h2>
<div className="service-special-subtitle">some of our many areas of expertise</div>
</div>
<div className="service-border-line">

</div>
<div className="service-sub-container">                
<div className="service">
    <h3 className="title-service">EVENT PLANNING</h3>
    <img className="service-img" src="Images/Event-Planning.jpg"/>
    <p className="service-p" sx={"text-align: center;"}>Working with a professional planner is the best way to enjoy the event planning process.
         Allow your event team to handle the details so you can relax and enjoy yourself as your vision becomes a reality.</p>
</div>
<div className="service">
    <h3 className="title-service">EVENT DESIGN</h3>
    <img className="service-img" src="Images/event-design.jfif"/>
    <p className="service-p" sx={"text-align: center;"}>Your event team will work with you to create an inspiration board and floor plan based on your specific vision. 
        From centerpieces to seating charts, we guarantee customization.</p>
</div>
<div className="service">
    <h3 clas="title-service">EVENT PRODUCTION</h3>
    <img className="service-img" src="Images/event-production.jfif"/>
    <p className="service-p"  sx={"text-align: center;"}>Event production is more than event planning and design. 
        Our team will be there every step of the way bringing together every detail required to deliver a spectacular, memorable event on time and on budget.</p>
</div>
</div>
</section>
</>
  )
}

export default About