import React from "react"
import Page from "@templates/page"
import ContactSection from "@sections/contact"
import FAQSection from "@sections/faq"

const ContactPage = () => {
  return (
    <Page
      title="Contact Us"
      description="Cycleworx langebaan contact details and frequently asked questions."
    >
      <ContactSection />
      <FAQSection />
    </Page>
  )
}

export default ContactPage
