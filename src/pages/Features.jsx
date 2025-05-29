import React from 'react'
import Feahero from '../components/Features/Feahero'
import Enterprise from '../components/Features/Enterprise'
import IndustrySection from '../components/Features/Industry'
import Stream from '../components/Features/Stream'
import NewHero from '../components/NewHero'

const Features = () => {
  return (
    <div>
      <NewHero />
      <Feahero/>
      <Enterprise/>
      <IndustrySection/>
      <Stream/>
      
    </div>
  )
}

export default Features
