import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/lasanthaBig_img.jpg'
import htmlcss_icon from '../../assets/htmlcss_icon.svg'
import react_icon from '../../assets/react_icon.svg'
import javascript_icon from '../../assets/javascript_icon.svg'
import nextjs_icon from '../../assets/nextjs_icon.svg'


const About = () =>{
    return(
        <div id='About' className="about">
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">

                    <div className="about-para">
                        <p>I am an enthusiastic IT undergraduate with a passion for web development, web design, and UI/UX. Though I don't have formal work experience yet, I am dedicated to building my skills and expanding my knowledge in these areas. I look forward to growing my career by creating innovative, user-centered digital experiences.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-singleSkill"><img src={htmlcss_icon} alt="" /><p>HTML & CSS</p><hr style={{width:"60%"}}></hr></div>
                        <div className="about-singleSkill"><img src={react_icon} alt="" /><p>React JS</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-singleSkill"><img src={javascript_icon} alt="" /><p>JavaScript</p><hr style={{width:"70%"}}></hr></div>
                        <div className="about-singleSkill"><img src={nextjs_icon} alt="" /><p>NextJs</p><hr style={{width:"30%"}}></hr></div>
                    </div>

                </div>
            </div>

            <div className="about-achievements">
                        <div className="about-singleAachievement">
                            <h1>2+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr/>
                        <div className="about-singleAachievement">
                            <h1>1</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr/>
                        <div className="about-singleAachievement">
                            <h1>1</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
            </div>

        </div>
    )

}

export default About