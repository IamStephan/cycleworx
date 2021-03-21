import React from "react"
import Page from "@templates/page"
import HeroSection from "@sections/hero"
import BrandLogosSection from "@sections/brand_logos"
import ServicesSection from "@sections/services"
import TeamSection from "@sections/team"
import SocialProofSection from "@sections/social_proof"
import CTASection from "@sections/cta"

const IndexPage: React.FC = () => {
  return (
    <Page isNavTransparent={true} title="" description="">
      <HeroSection />
      <BrandLogosSection />
      <ServicesSection />
      <TeamSection />
      <SocialProofSection />
      <CTASection />
    </Page>
  )
}

export default IndexPage
