import React from 'react'
import { Link } from 'gatsby'
import Image from '@/components/Image'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const [t] = useTranslation()
  return (
    <Layout>
      <SEO title="Yasuhiro Ito" />
      <h1 className="text-2xl mb-4">{t('author')}</h1>
      <h2 className="text-xl mb-4">{t('title')}</h2>
      <p className="text-sm">{t('self-summary')}</p>
    </Layout>
  )
}

export default IndexPage
