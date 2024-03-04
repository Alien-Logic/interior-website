import React from 'react';
import "./projects.css";

const Projects = ({data}) => {
  return (
    <div className='container projects-container'>
      <p className='h1 center bold'>Follow Our Projects</p>
      <p className='text center projects-desc'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      <div className='projects'>
        {data.map((project, index) => (
            <div className='project' key={index}>
                <img src={project.img} />
                <div className='project-more'>
                <div>
                <p className='bold text'>{project.title}</p>
                <p className='text'>{project.category}</p>
                </div>
                <div><img className='arrow' src='/arrow.svg' /></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
