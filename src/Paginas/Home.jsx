import React from 'react'
import {Link} from 'react-router-dom'

function Home (){
    return(
        <>
        <h1>Welcome</h1>
        <p>Desarrolladora apasionada por la creación de software innovador y funcional. Mi enfoque se centra en diseñar soluciones tecnológicas que resuelvan problemas de manera eficiente y efectiva. Con experiencia en diversos lenguajes de programación y tecnologías, estoy preparada para enfrentar cualquier desafío que se presente</p>

        <ul>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>    
        
        
        </>
    )
}

export default Home;