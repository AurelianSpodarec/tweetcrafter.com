import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import dataFAQs from "./dataFAQs"

function SectionFAQs() {
  return (
    <Section>
      <Container>
        {dataFAQs.map((item) => {
          return (
            <div>
              {item.question}
              {item.answer}
            </div>
          )
        })}
      </Container>
    </Section>
  )
}

export default SectionFAQs
