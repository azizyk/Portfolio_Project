import React from 'react'
import '../Styles/Gallary.css'

function Gallary() {
  return (
    <>
    <div className="about-hero">
    <img src="Images/corporate-event.jpg"/>
    </div>
    <sectio>
        <div className="gallary-main-container">

        <div className="gallary-container">
            
            <img className="gallary-img" src="Images/1.jpg"/>
            <img className="gallary-img" src="Images/3.jpg"/>
            <img className="gallary-img" src="Images/5.jpg"/>
           
        </div>
        <div className="gallary-container">
        <img className="gallary-img" src="Images/2.jpg"/>
            <img className="gallary-img" src="Images/4.jpg"/>
            <img className="gallary-img" src="Images/6.jpg"/>
            
        </div>
        <div className="gallary-container">
        <img className="gallary-img" src="Images/5.jpg"/>
            <img className="gallary-img" src="Images/7.jpg"/>
            <img className="gallary-img" src="Images/9.jpg"/>
            
        </div>

        </div>

    </sectio>
    </>
  )
}

export default Gallary