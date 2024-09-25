import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import whatsapp_icon from '../../assets/whatsapp_icon.svg'


const Contact = ()=>{

    const onSubmit = async (event) => { // code from Web3forms website
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6896462e-7225-4114-b156-fa5617b5b87f");  //entered my key number
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message); //edited here to confirm form submissio successful by alert
        }
      };

    return (
        <div id='Contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I/m currently available to take on new projects, So feel free to send me a message about anything you want to ask. You can contact anytime.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" /> <p>lasanthakumaraofficial@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt="" /> <p>Ginigathena, Central Province, SL</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={whatsapp_icon} alt="" /> <p>(+94)763731766</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlfor="">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" required='true'></input>
                    <label htmlfor>Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" required='true'></input>
                    <label htmlfor="">Message</label>
                    <textarea rows="8" placeholder='Write Your message here' name="message" required='true'></textarea>
                    <button type="submit" className='contact-submit'>Submit Now</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact