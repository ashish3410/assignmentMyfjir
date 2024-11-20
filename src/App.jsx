import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <>
      
      <Header/>
      <Navigation/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
