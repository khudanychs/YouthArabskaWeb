import SEO from '../components/SEO'
import EventsSection from '../components/EventsSection'
import AllianceSection from '../components/AllianceSection'
import { useTranslation } from 'react-i18next'

export default function EventsPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('seo.akce.title')}
        description={t('seo.akce.description')}
        canonical="/akce"
        ogTitle={t('seo.akce.og_title')}
        ogDescription={t('seo.akce.og_description')}
      />
      <div className="pt-28">
        <EventsSection />
        <AllianceSection />
      </div>
    </>
  )
}
