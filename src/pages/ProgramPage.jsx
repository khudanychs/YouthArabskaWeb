import SEO from '../components/SEO'
import TimelineSection from '../components/TimelineSection'
import AllianceSection from '../components/AllianceSection'

export default function ProgramPage() {
  return (
    <>
      <SEO
        title="Architektura Roku – Program 2026/2027"
        description="Systematický plán kroků Youth Arabská: Iniciační Fórum (Podzim 2026), Strategické Workshopy (Zima 2026/2027) a Veletrh Horizont (Jaro 2027)."
        canonical="/program"
        ogTitle="Program 2026–2027 | Youth Arabská – Architektura Roku"
        ogDescription="Od Iniciačního Fóra přes Strategické Workshopy až po Veletrh Horizont. Průvodce naším akademickým rokem."
      />
      <div className="pt-24">
        <TimelineSection />
        <AllianceSection />
      </div>
    </>
  )
}
