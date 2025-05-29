import React from 'react'
import Hero from './../components/Productpages/Live Streaming/Hero'
import Immersive from './../components/Productpages/Live Streaming/Immersive'
import Commerce from './../components/Productpages/Live Streaming/Commerce'
import Advantage from './../components/Productpages/Live Streaming/Advantage'
import Faq from '../components/Hireus/Faq1.jsx'
import Launching from './../components/Productpages/Live Streaming/Launching.jsx'
import Header from '../components/Header/Header.jsx'

const Livestreaming = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Immersive/>
      <Advantage/>
      <Commerce/>
      <Faq/>
      <Launching/>
    </div>
  )
}

export default Livestreaming
