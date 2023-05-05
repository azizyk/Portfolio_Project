import React from 'react'
import '../Styles/Corporate-Events.css'

function Corporate_Events() {
  return (
    <>
    <div className="corporate-hero">
    <img src="Images/corporate-event.jpg"/>
</div>
<section className="corporate-main-container">
<div className="corporate-sub-content-container">          
    <div className="text-box">
        <p className="p1" sx={"text-align: center;"}>The business world moves quickly and is meticulously organized. When you work with AzkEvents, 
            we take care of those details while designing an unforgettable event for your guests that aligns with the goals of your business.</p>
        <p className="p2" sx={"text-align: center;"}>We'll assist you with developing and putting into action the event strategy you have in mind,
             whether it's for bringing in new clients, educating your staff, or commemorating corporate milestones. Once your event is reserved, 
             we will work with you to lay the groundwork, developing an inspiration board and floor layout based on your objectives. 
             Afterward, your Ultimate team will bring your brand to life through our top-notch planning and management services, 
             as well as day-of coordination, from the production to the design.</p>

    </div>
    <div className="corporate-img-container">
        <img className="corporate-img" src="Images/corporate.jpg"/>
    </div>
</div>  
</section>
<section className="corporate-service-container">
<div className="corporate-service-sub-container">  
<div className="text-box">
<div className="corporate-event-service">
    <h2 className="corporate-event-service-title">EVENT SERVICES</h2>
</div>
<ul className="corporate-service-ul">                
        <li>On-site Coordination &amp; Management</li>
        <li>Meeting Planning</li>
        <li>Brand Integration</li>
        <li>Rentals &amp; Vendor Coordination</li>
        <li>Floor Plan Design</li>
        <li>Budget Management</li>
        <li>Staging</li>
        <li>Security &amp; Staffing</li>
        <li>Entertainment</li>
        <li>Transportation &amp; Parking</li>
        </ul>
</div>
<div className="corporate-service-img-container">
<img className="corporate-service-img" src="Images/corporate1.jpg"/>
</div>   
<div className="text-box">
<div className="corporate-event-service">
    <h2 className="corporate-event-service-title">TYPES OF EVENTS</h2>
</div>
<ul className="corporate-service-ul">
        <li>Meetings, seminars, speakers, training</li>
        <li>Company announcements, product launches or releases,</li>
        <li>Milestone celebrations</li>
        <li>Team-building days, executive retreats</li>
        <li>Conferences, trade shows, networking events</li>
        <li>Fundraisers, auctions, charity events</li>
        <li>Holiday parties, annual parties, employee appreciation</li>
        <li>Anything else you need!</li>
</ul>
</div>
</div> 
</section>
</>
  )
}

export default Corporate_Events 