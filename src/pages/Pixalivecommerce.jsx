import React from 'react'
import Hero1 from './../components/Productpages/Pixalive Commerce/Hero1'
import TopRatedSection from '../components/Productpages/Pixalive Commerce/TopRatedSection'
import CommerceSection from '../components/Productpages/Pixalive Commerce/CommerceSection'
import CategorySection from '../components/Productpages/Pixalive Commerce/CategorySection'
import FeatureSection from '../components/Productpages/Pixalive Commerce/FeatureSection'
import BuyerSellerFeatures from '../components/Productpages/Pixalive Commerce/BuyerSellerFeatures'
import MobileCommerceSection from '../components/Productpages/Pixalive Commerce/MobileCommerceSection'
import PixaliveDemoSection from '../components/Productpages/Pixalive Commerce/PixaliveDemoSection'
import Faq from '../components/Hireus/Faq1'
import Header from '../components/Header/Header'

const Pixalivecommerce = () => {
  return (
    <div>
      <Header />
      <Hero1 />
      <TopRatedSection />
      <CommerceSection />
      <CategorySection />
      <FeatureSection />
      <BuyerSellerFeatures />
      <MobileCommerceSection />
      <PixaliveDemoSection />
      <Faq/>
      
    </div>
  )
}

export default Pixalivecommerce
