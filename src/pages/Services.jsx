import React from 'react'
import ServiceCards from '../components/Services/ServiceCards'
import ServiceCardstwo from '../components/Services/ServiceCardstwo'
import ServiceCardsThree from '../components/Services/ServiceCardsThree'
import Serviceslastcards from '../components/Services/Serviceslastcards'
import CaseStudies from '../components/Services/CaseStudies'
import Faqfull from '../components/Home/Faqfull'
import Header from '../components/Header/Header'

const Services = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header />
      <ServiceCards />
      <ServiceCardstwo />
      <ServiceCardsThree />
      <Serviceslastcards />
      <CaseStudies />
      <Faqfull />
    </div>
  )
}

export default Services