import React, { useState } from 'react'
import '../Styles/Contact-us.css'
import axios from 'axios'

// function ContactUs() {
//   return (
//     <div>Contact-us</div>
//   )
// }

// export default ContactUus

const ContactUs = () => {
 
  const [contact, setContact] = React.useState({
    firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      additionalNotes: '',
  })
  const handleChange=(e)=>{
    setContact({...contact, [e.target.name]:e.target.value})
  }
  const [message, setMessage]= useState('');
  
  const onSubmit = (e) => {
    e.preventDefault()
    //setFormStatus('Submitting...')
    if (handleValidation())
    {
        axios.post('http://localhost:3002/api/contact', contact).then(res=>{
            console.log(res.data.msg);
            setMessage(res.data.msg);
            clearForm()
        });
    }
    else{
        setMessage("Some required field missed");
    }
  }
  const clearForm=()=>{
    setContact({
        firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventType: '',
          additionalNotes: '',
      })
  }
 const handleValidation=()=>{
    const { firstName, lastName, email,phone,eventType } = contact;
    if (!firstName)
        return false;
    if (!lastName)
        return false;
    if (!email)
        return false;
    if (!phone)
        return false;
    if (!eventType)
        return false;
    return true;
 }
  return (
    <>
    <div className="about-hero">
        
    <img src="Images/10.jpg"/>
    <div className="sub-title">
               <h5>CONTACT US</h5>  
               <h2>WE ARE HERE!</h2>
            </div> 
    </div>

 <div className='contactTittle'>
    <h6 className="mb-3">SEND US A MESSAGE</h6>
    <h1>LET'S GET STARTED</h1>
 </div>
<div className="container">
  <form onSubmit={onSubmit}>

    <label className="fname">FIRST NAME</label>
    <input type="text" id="fname" name="firstName" required onChange={(e)=> handleChange(e)} placeholder="Your name.."/>

    <label className="lname">LAST NAME</label>
    <input type="text" id="lname" name="lastName" required onChange={(e)=> handleChange(e)} placeholder="Your last name.."/>

    <label className="email">EMAIL ADDRESS</label>
    <input type="text" id="email" name="email" required onChange={(e)=> handleChange(e)} placeholder="Email..."/>

    <label className="phone">PHONE NUMBER</label>
    <input type="text" id="phone" name="phone" required onChange={(e)=> handleChange(e)} placeholder="0910201030..."/>

    <label className="event-type">TYPE OF EVENT</label>
    <select id="event-type" name="eventType" required onChange={(e)=> handleChange(e)} >
      <option value="wedding">Wedding</option>
      <option value="birthday">BirthDay</option>
      <option value="bridal">Bridal Shower</option>
      <option value="socialgatherting">Social Gathering</option>
      <option value="corporateevent">Corporate Events</option>
    </select>

    <label className="subject">ADDITIONAL NOTES</label>
    <textarea id="subject" name="additionalNotes" onChange={(e)=> handleChange(e)} placeholder="Special requests..." sx="height:200px"></textarea>
    <input type="submit" value="Submit"/>
    

  </form>
  <label>{message}</label>
</div>


   
    {/* <div className='formContainer'>
    <div className="container mt-5">
     <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="fname">
            Firts Name
          </label>
          <input className="form-control" type="text" id="fname" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lname">
            Last Name
          </label>
          <input className="form-control" type="text" id="lname" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input className="form-control" type="text" id="phone" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="event">
          TYPE OF EVENT
          </label>
           
          <select className ="event-type">
          <input className="form-control" type="text" id="event" required />
            <option value="null">Please Select</option>
            <option value="Wedding">Wedding</option>
            <option value="Rehearsal Dinner">Rehearsal Dinner</option>
            <option value="Corporate or Social">Corporate or Social</option>
         </select>
        </div>
   

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div> 
    </div> */}
    </>
  )
}
export default ContactUs

