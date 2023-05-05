import React from 'react'
import '../Styles/Social-gathering.css'

function Social_gathering() {
  return (
    <>
    <div className="wedding-hero">
    <img src="Images/banner.jpg"/>
</div>
<section className="wedding-main-container">
<div className="wedding-sub-content-container">          
    <div className="text-box">
        <p className="p1" sx={"text-align: center;"}>You imagine it, and we'll make it happen, whether it's a bridal shower, an incredible surprise birthday party, 
            or an impressive engagement celebration.</p>
        <p className="p2" sx={"text-align: center;"}>The Ultimate Experience is unrivaled. Our team will walk you through the entire planning process, 
            ensuring a stress-free experience from start to finish.</p>
        <p className="p3" sx={"text-align: center;"}>We will create a custom proposal based on your wants and needs from the start. After booking, 
            your event team will work with you to lay the groundwork for your wedding, creating an inspiration board and floor plan based on your specific vision. 
            Customization is guaranteed with us, from unique lighting to seating charts.</p>
    </div>
    <div className="wedding-img-container">
        <img className="wedding-img" src="Images/wedding-couple.jpg"/>
    </div>
</div>  
</section>
<section className="wedding-service-container">
<div className="wedding-service-sub-container">  
<div className="wedding-service-img-container">
<img className="wedding-service-img" src="Images/Weddings-service.jpg"/>
</div>   
<div className="text-box">
<div className="wedding-event-service">
    <h2 className="event-service-title">EVENT SERVICES</h2>
</div>
<ul className="wedding-service-ul">
    <li>On-site Coordination & Management</li>
    <li>Event Planning & Design</li>
    <li>Event Rentals</li>
    <li>Vendor Coordination</li>
    <li>Floor Plan Design</li>
    <li>Budget Management</li>
    <li>Staging</li>
    <li>Entertainment</li>
    <li>Tenting</li>
    <li>Transportation &amp; Parking</li>
</ul>
</div>
</div> 
</section>
</>
  )
}

export default Social_gathering