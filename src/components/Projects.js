import React from 'react'
import { Table } from 'react-bootstrap'
import Project from './Project'

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
                <Project project={project} serial={index} key={index} />
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </>
  )
}

export default Projects
