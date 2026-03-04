import SEO from '../components/SEO'
import AllianceSection from '../components/AllianceSection'

export default function SpojenectviPage() {
  return (
    <>
      <SEO
        title="Připojte se – Spojenectví"
        description="Hledáme jedince ochotné investovat svůj čas do budování komunity Youth Arabská. Organizace, technologie, PR – váš prostor je zde. Gymnázium Arabská 14, Praha 6."
        canonical="/spojenectvi"
        ogTitle="Připojte se k Youth Arabská | Spojenectví – Gymnázium Arabská"
        ogDescription="Ať už toužíte organizovat, tvořit, nebo přinášet nové myšlenky – váš prostor je zde. Kontaktujte nás a staňte se součástí komunity."
      />
      <div className="pt-24">
        <AllianceSection />
      </div>
    </>
  )
}
