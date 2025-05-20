import React from 'react'
import Hero from '../components/Productpages/Pixalive works/Hero'
import WhyChooseUs from '../components/Productpages/Pixalive works/Whychoose'
import Cards from '../components/Productpages/Pixalive works/Cards'
import Faq from '../components/Home/Faq'
import Launching from '../components/Productpages/Pixalive works/Launching'
import Keyfeatures from '../components/Productpages/Pixalive works/Keyfeatures'

const Pixaliveworks = () => {
  return (
    <div>
      <Hero/>
      <Keyfeatures/>
      <WhyChooseUs/>
      <Cards/>
      <Faq/>
      <Launching/>
    </div>
  )
}

export default Pixaliveworks
