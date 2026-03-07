import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import PhilosophySection from '../components/PhilosophySection'
import HorizontSection from '../components/HorizontSection'
import EventsSection from '../components/EventsSection'
import AllianceSection from '../components/AllianceSection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Překračujeme Zavedené Hranice"
        description="Youth Arabská je oficiální platforma studentů Gymnázia Arabská 14. Skrze projekt Youth Horizon propojujeme akademický svět s praxí a pomáháme studentům v jejich rozvoji."
        canonical="/"
        ogTitle="Youth Arabská | Nová éra příležitostí"
        ogDescription="Vstupte do prostoru, kde se formuje myšlení a otevírají se nové obzory na Gymnáziu Arabská 14 skrze projekt Youth Horizon."
      />
      <HeroSection />
      <PhilosophySection />
      <HorizontSection />
      <EventsSection />
      <AllianceSection />
    </>
  )
}

