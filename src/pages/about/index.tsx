import React from "react"
import Page from "@templates/page"
import AboutSection from "@sections/about"
import TeamSection from "@sections/team"

const AboutPage = () => {
  return (
    <Page
      title="About Us"
      description="A brief overview of Cycleworx Langebaan's journey and its team of professionals."
    >
      <AboutSection />
      <TeamSection />
    </Page>
  )
}

export default AboutPage
