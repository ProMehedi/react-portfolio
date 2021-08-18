import React from 'react'
import Projects from './components/Projects'
import Screen from './components/Screen'
import projects from './data'

const App = () => {
  return (
    <Screen>
      <Projects data={projects} />
    </Screen>
  )
}

export default App
