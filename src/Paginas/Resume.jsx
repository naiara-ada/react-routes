import React from 'react'
import { Link } from 'react-router-dom'
import { studies, experiences } from '../data/resume.js'
import '../App.css'

function Resume (){
    return(
        <>
            <h2>Resume</h2>            
            <div className='resumeContainer'>
                <h3>Studies</h3>
                <div className='content'>
                {studies.map((study) =>{
                    return(
                        <div className='resumeClass' key={study.id}>
                            <p><span>Title:</span> {study.title} </p>
                            <p><span>Institution:</span> {study.institution} </p>
                            <p><span>Date:</span> {study.date} </p>
                         </div>
                    )
                })}  
                </div>              
            </div>

            <div className='resumeContainer'>
                <h3>Experiences</h3>
                <div className='content'>
                {experiences.map((experience)=>{
                    return(
                        <div className='resumeClass' key={experience.id}>
                            <p><span>Title:</span> {experience.title} </p>
                            <p><span>Company:</span> {experience.company} </p>
                            <p><span>Date:</span> {experience.date} </p>
                        </div>
                    )
                })}
                </div>
            </div>



            <footer>
                <Link to="/">Home</Link> - <Link to="/projects">Projects</Link>
            </footer>
        
        </>
    )
}

export default Resume