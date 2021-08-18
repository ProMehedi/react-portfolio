import React from 'react'
import { Table } from 'react-bootstrap'

const Projects = ({ data }) => {
  return (
    <>
      {data.map((projects, i) => (
        <div className='mb-5' key={i}>
          <h4 className='my-3'>{projects.title}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Live Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.data.map((project, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.desc}</td>
                  <td>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </>
  )
}

export default Projects
