import SEO from '../components/SEO'
import PhilosophySection from '../components/PhilosophySection'
import AllianceSection from '../components/AllianceSection'

export default function VizePage() {
  return (
    <>
      <SEO
        title="O nás – Kdo jsme a co chceme"
        description="Jsme komunita studentů Gymnázia Arabská. Chceme být otevřeným prostorem pro nové nápady a propojovat školu s reálnou praxí. Poznejte naši misi."
        canonical="/vize"
        ogTitle="O nás | Youth Arabská – Kdo jsme a co chceme"
        ogDescription="Budoucnost není to, co přijde, ale to, co uděláme. Filozofie a hodnoty komunity Youth Arabská."
      />
      <div className="pt-24">
        <PhilosophySection />
        <AllianceSection />
      </div>
    </>
  )
}
