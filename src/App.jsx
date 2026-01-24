import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import News from './Page/News'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar className={'sticky top-0 z-10'}/>
      <Category className={' py-5 sticky top-14 z-10 bg-white'}/>
      <News className={'pb-10'}/>
      <Footer/>
    </>
  )
}

export default App
