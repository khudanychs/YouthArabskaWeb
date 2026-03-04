import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import PhilosophySection from '../components/PhilosophySection'
import HorizontSection from '../components/HorizontSection'
import TimelineSection from '../components/TimelineSection'
import AllianceSection from '../components/AllianceSection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Překračujeme Zavedené Hranice"
        description="Youth Arabská je oficiální platforma studentů Gymnázia Arabská 14. Skrze projekt Horizont propojujeme akademický svět s reálnou praxí a formujeme elitu zítřka."
        canonical="/"
        ogTitle="Youth Arabská | Nová éra příležitostí"
        ogDescription="Vstupte do prostoru, kde se formuje myšlení a otevírají se obzory na Gymnáziu Arabská 14."
      />
      <HeroSection />
      <PhilosophySection />
      <HorizontSection />
      <TimelineSection />
      <AllianceSection />
    </>
  )
}
