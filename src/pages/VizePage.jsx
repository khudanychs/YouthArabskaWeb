import SEO from '../components/SEO'
import PhilosophySection from '../components/PhilosophySection'
import AllianceSection from '../components/AllianceSection'

export default function VizePage() {
  return (
    <>
      <SEO
        title="Kultivace Myšlení – Naše Vize"
        description="Odmítáme povrchnost. Youth Arabská zprostředkovává přímý kontakt s kapacitami od metafyziky přes vědu až po byznys. Hloubka poznání, propojení světů, tvorba elity."
        canonical="/vize"
        ogTitle="Naše Vize | Youth Arabská – Kultivace Myšlení"
        ogDescription="Ctíme tradici klasického vzdělávání, avšak radikálně inovujeme jeho aplikaci. Filozofie a hodnoty komunity Youth Arabská."
      />
      <div className="pt-24">
        <PhilosophySection />
        <AllianceSection />
      </div>
    </>
  )
}
