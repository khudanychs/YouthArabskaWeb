import SEO from '../components/SEO'
import HorizontSection from '../components/HorizontSection'
import AllianceSection from '../components/AllianceSection'

export default function HorizontPage() {
  return (
    <>
      <SEO
        title="Veletrh Horizont – Magnum Opus komunity"
        description="Jednou do roka transformujeme půdu Gymnázia Arabská v absolutní centrum příležitostí. 40+ pozvaných autorit, 15 institucí, 600+ účastníků. Jaro 2027."
        canonical="/horizont"
        ogTitle="Veletrh Horizont 2027 | Youth Arabská – Gymnázium Arabská 14"
        ogDescription="Horizont není pouhou událostí – je to manifestace naší vize. Setkání studentů s vědou, byznysem a veřejným životem tváří v tvář."
      />
      <div className="pt-24">
        <HorizontSection />
        <AllianceSection />
      </div>
    </>
  )
}
