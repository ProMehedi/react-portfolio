import React from 'react'

const Project = ({ project, serial }) => {
  return (
    <tr>
      <td>{serial + 1}</td>
      <td>{project.name}</td>
      <td>{project.desc}</td>
      <td>
        <a href={project.link} target='_blank' rel='noopener noreferrer'>
          {project.link}
        </a>
      </td>
    </tr>
  )
}

export default Project
