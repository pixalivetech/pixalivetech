import React from 'react'
import Hero from '../components/Productpages/Shoppable videos/Hero'
import Immersive from './../components/Productpages/Shoppable videos/Immersive'
import PixaliveAdvantage from '../components/Productpages/Shoppable videos/Advantage'
import Commerce from '../components/Productpages/Shoppable videos/Commerce'
import Faq from '../components/Hireus/Faq1.jsx'
import Launching from './../components/Productpages/Shoppable videos/Launching.jsx'
import Header from '../components/Header/Header.jsx'

const Shoppablevideos = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Immersive/>
      <PixaliveAdvantage/>
      <Commerce/>
      <Faq />
      <Launching/>
    </div>
  )
}

export default Shoppablevideos
