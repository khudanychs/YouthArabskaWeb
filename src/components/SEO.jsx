import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://khudanychs.github.io/YouthArabskaWeb'

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = `${BASE_URL}/og-image.png`,
}) {
  const { t } = useTranslation()
  const fullTitle = title
    ? t('seo.title_template', { title })
    : t('seo.default_title')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${BASE_URL}${canonical || '/'}`} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={`${BASE_URL}${canonical || '/'}`} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
