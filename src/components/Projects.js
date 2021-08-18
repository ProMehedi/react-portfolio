import React from 'react'
import { Table } from 'react-bootstrap'

const Projects = ({ data }) => {
  const categories = []
  data.forEach((project) => {
    if (!categories.includes(project.category)) {
      categories.push(project.category)
    }
  })

  const title = (category) => {
    if (category === 'html') {
      return 'HTML, CSS / Web Design Projects'
    } else if (category === 'js') {
      return 'Javascript Projects'
    } else if (category === 'react') {
      return 'React Projects'
    } else if (category === 'mern') {
      return 'MERN Projects'
    }
  }

  return (
    <>
      {categories.map((category, i) => (
        <div className='mb-5' key={i}>
          <h4 className='my-3'>{title(category)}</h4>
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
              {data.map((project, index) => {
                if (project.category === category) {
                  return (
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
                  )
                }
                return null
              })}
            </tbody>
          </Table>
        </div>
      ))}
    </>
  )
}

export default Projects
