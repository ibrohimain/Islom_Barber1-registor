import React from 'react'
import Home from './page/Home'
import './App.css'

const App = () => {
  return (
    <div className='w-[350px] h-[100vh] mx-auto flex items-center justify-center '>
      <div className='w-[100%] h-[90%] bg-[white] rounded-[5px]'>
        <Home />
      </div>
    </div>
  )
}

export default App
