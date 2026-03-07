import SEO from '../components/SEO'
import EventsSection from '../components/EventsSection'
import AllianceSection from '../components/AllianceSection'

export default function EventsPage() {
  return (
    <>
      <SEO
        title="Naše Aktivity – Youth Arabská"
        description="Přehled akcí a projektů komunity Youth Arabská. Od Veletrhu Youth Horizon po Beyond The Bell."
        canonical="/akce"
        ogTitle="Naše Aktivity | Youth Arabská"
        ogDescription="Podívejte se na akce, které jsme uspořádali a které chystáme. Budujeme aktivní komunitu na Arabské."
      />
      <div className="pt-24">
        <EventsSection />
        <AllianceSection />
      </div>
    </>
  )
}
