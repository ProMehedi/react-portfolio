import React, { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Screen from './components/Screen'

const App = () => {
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    const response = await fetch(
      'https://promehedi.github.io/react-portfolio/data.json'
    )
    const data = await response.json()
    setProjects(data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (projects.length === 0) {
    return <Preloader />
  }

  return (
    <Screen>
      <h5 className='my-4'>
        My Portfolio site -{' '}
        <a
          title='Mehedi Hasan'
          target='_blank'
          href='https://promehedi.com/'
          rel='noopener noreferrer'
        >
          ProMehedi.com
        </a>
      </h5>
      <Projects data={projects} />
    </Screen>
  )
}

export default App
