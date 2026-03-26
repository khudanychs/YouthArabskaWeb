import SEO from '../components/SEO'
import AllianceSection from '../components/AllianceSection'
import { useTranslation } from 'react-i18next'

export default function SpojenectviPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('seo.spojenectvi.title')}
        description={t('seo.spojenectvi.description')}
        canonical="/spojenectvi"
        ogTitle={t('seo.spojenectvi.og_title')}
        ogDescription={t('seo.spojenectvi.og_description')}
      />
      <div className="pt-24">
        <AllianceSection />
      </div>
    </>
  )
}
