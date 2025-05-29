import React from 'react'
import Hero from  './../components/Productpages/Live Shopping/Hero'
import Immersive from './../components/Productpages/Live Shopping/Immersive'
import Advantage from './../components/Productpages/Live Shopping/Advantage'
import Commerce from './../components/Productpages/Live Shopping/Commerce'
import Faq from '../components/Hireus/Faq1'
import Launching from './../components/Productpages/Live Shopping/Launching'
import Header from '../components/Header/Header'

const Liveshopping = () => {
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

export default Liveshopping
