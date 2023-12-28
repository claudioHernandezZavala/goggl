import React , {useState} from 'react'
import {default as Navbar} from './components/Navbar'
import { default as  Routes} from './components/rutes'
import {default as  Footer} from './components/Footer'

const App = () => {
     const [darkTheme, setdarkTheme] = useState(false)
  return (
    <div className={darkTheme?'dark':''}>
      <div className='bg-gray-300 dark:bg-gray-900 dark:test-gray-200 min-h-screen dark:text-white'>
      <Navbar darkTheme={darkTheme} setdarkTheme={setdarkTheme}/>
      <Routes/>
      <Footer/>

      </div>

    </div>
  )
}

export default App