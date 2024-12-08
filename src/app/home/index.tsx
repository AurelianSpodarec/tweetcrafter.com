import SectionBenefits from "./_sections/Benefits"
import SectionClients from "./_sections/Clients"
import SectionFAQs from "./_sections/FAQs"
import SectionFeatures from "./_sections/Features"
import SectionFooterCTA from "./_sections/FooterCTA/inidex"
import SectionHero from "./_sections/Hero"
import SectionPricing from "./_sections/Pricing"

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
