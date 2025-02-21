import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
    </div>

    </>
  )
}

export default App