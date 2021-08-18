import React, { useEffect, useState } from 'react'
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
    return <div>Loading...</div>
  }

  return (
    <Screen>
      <Projects data={projects} />
    </Screen>
  )
}

export default App
