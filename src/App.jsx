import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import Container from './components/Container/Container'
import BackBone from './components/BackBone/BackBone'
import Insights from './components/Insights/Insights'
import Analytics from './components/Analytics/Analytics'
import Hunch from './components/Hunch/Hunch'
import Query from './components/Query/Query'
import Business from './components/Business/Business'
import Reviews from './components/Reviews/Reviews'
import Forward from './components/forward/Forward'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
      <Hero/>
      <BackBone/>
      <Insights/>
      <Analytics/>
      <Hunch/>
      <Query/>
      <Business/>
      <Reviews/>
      <Forward/>
      <Footer/>
    </div>
  )
}

export default App