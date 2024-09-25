import React from 'react'
import './Hero.css'
import profile_Img from '../../assets/lasantha_img.jpg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import instagram_icon from '../../assets/instagram_icon.svg'
import facebook_icon from '../../assets/facebook_icon.svg'
import x_icon from '../../assets/x_icon.svg'
import medium_icon from '../../assets/medium_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () =>{
    return (
        <div id="Home" className='heroAll'>
            <div className='hero-Name'>
                <div className='hero-title'>
                    <h1><span>I'm Lasantha, </span>frontend developer based in Sri Lanka</h1>
                    <p>I am an undergraduate with deep passion for frontend development, web development and UI/UX Design and Art </p>
                </div>
                <div className='hero_action'>
                <AnchorLink className='anchor-link' offset={60} href="#Contact"><div className='hero_connect'>Connect With me</div></AnchorLink>
                    <div className='hero_resume'>My resume</div>
                </div>
            </div>

            <div className='profile'>
                <div className='profile-with-social'>
                    <AnchorLink className='anchor-link' offset={60} href="#About"><img className='profileImage' src={profile_Img} alt="" /></AnchorLink>
                    <div className='hero-socialmedia'>
                        <a href="https://www.linkedin.com/in/lasantha-kumara-261114284/"><img src={linkedin_icon} alt="" /></a>
                        <a href="https://github.com/UserLasa73"><img src={github_icon} alt="" /></a>
                        <a href="https://twitter.com/LasaSL2000"><img src={x_icon} alt="" /></a>
                        <a href="https://medium.com/@lasantha_kumara"><img src={medium_icon} alt="" /></a>
                        <a href="https://www.instagram.com/lasa2887?igsh=MXFsYm5tNnVlODdncA%3D%3D&utm_source=qr"><img src={instagram_icon} alt="" /></a>
                        <a href="https://www.facebook.com/share/pf5ooZBbZ9ZwZK9V/?mibextid=LQQJ4d"><img src={facebook_icon} alt="" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero