import React from 'react'
import Herosection from './../components/Aboutus/Hero'
import TeamSection from '../components/Aboutus/Team'
import NewHero from '../components/NewHero'


const AboutUs = () => {
  return (
    <div>
      <NewHero />
      <Herosection />
      <TeamSection />

    </div>
  )
}

export default AboutUs