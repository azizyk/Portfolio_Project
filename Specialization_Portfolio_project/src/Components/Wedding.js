import React from 'react'
import '../Styles/Wedding.css'

function Wedding() {
  return (
    <>
    <div className="wedding-hero">
    <img src="Images/blue-rose.jpg"/>
</div>
<section className="wedding-main-container">
<div className="wedding-sub-content-container">
    <div className="text-box">
        <p className="p1" sx={"text-align: center;"}>Our team is here to help you create the day you've always imagined, a day you'll never forget.</p>
        <p className="p2" sx={"text-align: center;"}>We will create a custom proposal based on your wants and needs from the start. After booking,
            your event team will work with you to lay the groundwork for your wedding, creating an inspiration board and floor plan based on your specific vision.
            Customization is guaranteed with us, from unique lighting to seating charts.</p>
        <p className="p3" sx={"text-align: center;"}>We care about your wedding planning experience from start to finish. So relax and enjoy yourself.
            Your event team will assist you every step of the way, ensuring that your special day is stress-free and unforgettable.</p>
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
    <h2 className="event-service-title">WEDDING SERVICES</h2>
</div>
<ul className="wedding-service-ul">
    <li>Ceremony &amp; Reception Coordination</li>
    <li>Rehearsal Dinner Coordination</li>
    <li>Rentals &amp; Vendor Coordination</li>
    <li>Wedding Day Timeline</li>
    <li>Floor Plan Design</li>
    <li>Wedding Concept &amp; Design</li>
    <li>Budget Management</li>
    <li>Security &amp; Staffing</li>
    <li>Tenting</li>
    <li>Transportation &amp; Parking</li>
</ul>
</div>
</div>
</section>
</>
  )
}

export default Wedding