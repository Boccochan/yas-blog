import React from 'react'
import { Link } from 'gatsby'
import Image from '@/components/image'
import SEO from '@/components/seo'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <SEO title="Yasuhiro Ito" />

      <h1 className="text-3xl">{t('blog')}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className="max-w-xs mb-6">
        <Image />
      </div>
      <Link className="underline text-blue-500" to="/page-2/">
        Go to page 2
      </Link>
    </>
  )
}

export default IndexPage
