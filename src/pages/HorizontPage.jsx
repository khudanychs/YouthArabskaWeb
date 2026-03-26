import SEO from '../components/SEO'
import HorizontSection from '../components/HorizontSection'
import HorizonDetails from '../components/HorizonDetails'
import PhotoGrid from '../components/PhotoGrid'
import AllianceSection from '../components/AllianceSection'
import { useTranslation } from 'react-i18next'

export default function HorizonPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('seo.horizon.title')}
        description={t('seo.horizon.description')}
        canonical="/horizon"
        ogTitle={t('seo.horizon.og_title')}
        ogDescription={t('seo.horizon.og_description')}
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
