import React from "react"
import Page from "@templates/page"
import HeroSection from "@sections/hero"
import SocialProofSection from "@sections/social_proof"
import ServicesSection from "@sections/services"
import TeamSection from "@sections/team"
import CTASection from "@sections/cta"

const IndexPage: React.FC = () => {
  return (
    <Page>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <TeamSection />
      <CTASection />
    </Page>
  )
}

export default IndexPage
