import SEO from '../components/SEO'
import PhilosophySection from '../components/PhilosophySection'
import AllianceSection from '../components/AllianceSection'
import { useTranslation } from 'react-i18next'

export default function VizePage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('seo.vize.title')}
        description={t('seo.vize.description')}
        canonical="/vize"
        ogTitle={t('seo.vize.og_title')}
        ogDescription={t('seo.vize.og_description')}
      />
      <div className="pt-24">
        <PhilosophySection />
        <AllianceSection />
      </div>
    </>
  )
}
