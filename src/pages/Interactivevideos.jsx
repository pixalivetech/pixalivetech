import React from 'react'
import Hero from '../components/Productpages/Interactive videos/Hero'
import Immersive from '../components/Productpages/Interactive videos/Immersive'
import Advantage from '../components/Productpages/Interactive videos/Advantage'
import Faq from '../components/Hireus/Faq1'
import Launching from './../components/Productpages/Interactive videos/Launching'
import Commerce from './../components/Productpages/Interactive videos/Commerce'
import Header from '../components/Header/Header'

const Interactivevideos = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Immersive/>
      <Advantage/>
      <Commerce/>
      <Faq />
      <Launching/>
    </div>
  )
}

export default Interactivevideos
