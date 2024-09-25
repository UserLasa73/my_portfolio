import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'

const Projects = ()=>{
    return (
            <div id='Projects' className='projects'>
                <div className='projects-title'>
                    <h1>My latest projects</h1>
                    <img src={theme_pattern} alt='' />
                </div>
                <div className='projects-container'>
                    {mywork_data.map((project,index)=>{
                        return <img key={index} src={project.w_img} alt="" />                                 
                    })}
                </div>
                <div className='projects-showmore'>
                    <p>Show more</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
    )
}

export default Projects