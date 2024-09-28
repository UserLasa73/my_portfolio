import React from 'react'
import './Footer.css'
import logo from '../../assets/SignatureLogo.svg'
import user_icon from '../../assets/user_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import instagram_icon from '../../assets/instagram_icon.svg'
import facebook_icon from '../../assets/facebook_icon.svg'
import x_icon from '../../assets/x_icon.svg'
import medium_icon from '../../assets/medium_icon.svg'



const Footer = ()=>{

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
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-top-left'>
                        <img src={logo} alt="" />
                        <p>I am a passionate frontend developer from Sri Lanka, eager to contribute and grow within the ever-evolving world of technology.</p>
                    </div>
                            <form className='footer-top-right' onSubmit={onSubmit}>
                                <div className="footer-email-input"><img src={user_icon} alt="" /> <input type="email" placeholder="Enter your Email" name="Subscriber" required="true"></input></div>
                                <div ><button type="submit" className='footer-subscribe'>Subscribe</button></div>
                            </form>
                </div>
                <hr />
                <div className='footer-bottom'>
                    <div className='footer-bottom-left'>&copy; 2024 Lasantha Kumara. All rights reserved.</div>
                    <div className='footer-bottom-right'>
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
                <div className='footer-last-socialMedia'>
                        <a href="https://www.linkedin.com/in/lasantha-kumara-261114284/"><img src={linkedin_icon} alt="" /></a>
                        <a href="https://github.com/UserLasa73"><img src={github_icon} alt="" /></a>
                        <a href="https://twitter.com/LasaSL2000"><img src={x_icon} alt="" /></a>
                        <a href="https://medium.com/@lasantha_kumara"><img src={medium_icon} alt="" /></a>
                        <a href="https://www.instagram.com/lasa2887?igsh=MXFsYm5tNnVlODdncA%3D%3D&utm_source=qr"><img src={instagram_icon} alt="" /></a>
                        <a href="https://www.facebook.com/share/pf5ooZBbZ9ZwZK9V/?mibextid=LQQJ4d"><img src={facebook_icon} alt="" /></a>
                </div>
            </div>
    )
}

export default Footer