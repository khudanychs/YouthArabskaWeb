import SEO from '../components/SEO'
import HorizontSection from '../components/HorizontSection'
import HorizonDetails from '../components/HorizonDetails'
import PhotoGrid from '../components/PhotoGrid'
import AllianceSection from '../components/AllianceSection'

export default function HorizonPage() {
  return (
    <>
      <SEO
        title="Veletrh Youth Horizon – Největší událost naší komunity"
        description="Jednou do roka proměňujeme prostory Gymnázia Arabská v centrum příležitostí. 40+ pozvaných osobností, 15 institucí, 600+ účastníků. Jaro 2027."
        canonical="/horizon"
        ogTitle="Veletrh Youth Horizon 2027 | Youth Arabská – Gymnázium Arabská 14"
        ogDescription="Youth Horizon není jen obyčejná akce – je to zhmotnění naší vize. Setkání studentů s vědou, byznysem a veřejným životem tváří v tvář."
      />
      <div className="pt-24">
        <HorizontSection />
        <PhotoGrid />
        <HorizonDetails />
        <AllianceSection />
      </div>
    </>
  )
}
