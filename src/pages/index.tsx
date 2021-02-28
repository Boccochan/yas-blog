import React from 'react'
import { Link } from 'gatsby'
import Image from '@/components/Image'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'
import { Share } from '@/components/Bio'

const IndexPage = () => {
  const [t] = useTranslation()
  return (
    <Layout>
      <SEO title="Yasuhiro Ito" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="col-span-1 h-full md:pr-4">
          <h1 className="text-2xl mb-4">{t('author')}</h1>
          <h2 className="text-sm text-gray-700 mb-4">
            {t('title')}@{t('location')}
          </h2>
          <p className="text-normal mb-4">{t('self-summary')}</p>
          <Share />
        </div>
        <div className="col-span-1 h-full"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
