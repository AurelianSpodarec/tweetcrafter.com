import SectionHero from "./_sections/Hero"
import SectionClients from "./_sections/Clients"
import SectionBenefits from "./_sections/Benefits"
import SectionFeatures from "./_sections/Features"
import SectionPricing from "./_sections/Pricing"
import SectionFAQs from "./_sections/FAQs"
import SectionFooterCTA from "./_sections/FooterCTA/inidex"

function Home() {
  return (
    <main>
      <SectionHero />
      <SectionClients />
      <SectionBenefits />
      <SectionFeatures />
      <SectionPricing />
      <SectionFAQs />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
