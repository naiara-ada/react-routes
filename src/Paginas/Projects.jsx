import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import projects from '../data/projects.js'
import '../App.css'


function Projects (){
const [arrProjects, setArrProjects] = useState([]);
useEffect(()=>{
    setArrProjects(projects)
}, [])
console.log('arrProjects',arrProjects)

return(
    <>
    <h2>Projects</h2>
    <div className='projectContainer'>
        {arrProjects.map((project) =>{
            return(
                <div key={project.id} className='projectCard'>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} />
                    <Link to={project.url} target='_blank'>Enlace</Link>

                </div>
            )
        })}
    </div>
    
        <footer >
            <Link to="/">Home</Link> - <Link to="/resume">Resume</Link>
        </footer>
    
    </>
)


}

export default Projects