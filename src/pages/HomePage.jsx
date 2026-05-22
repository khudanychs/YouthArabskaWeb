import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import PhilosophySection from '../components/PhilosophySection'
import EventsSection from '../components/EventsSection'
import PhotoGrid from '../components/PhotoGrid'
import AllianceSection from '../components/AllianceSection'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        canonical="/"
        ogTitle={t('seo.home.og_title')}
        ogDescription={t('seo.home.og_description')}
      />
      <HeroSection />
      <PhilosophySection />
      <EventsSection />
      <PhotoGrid />
      <AllianceSection />
    </>
  )
}
