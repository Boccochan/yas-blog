import React from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'
import { Share } from '@/components/Bio'
import { graphql, PageRendererProps } from 'gatsby'
import SkillSummary from '@/components/Home/SkillSummary'
import { Query } from '@/types/graphql-types'
import Img, { FixedObject } from 'gatsby-image'
import Programming from '@/components/Home/Programming'
import HandsOn from '@/components/Home/HandsOn'
import History from '@/components/Home/History'
import Others from '@/components/Home/Others'

interface Props extends PageRendererProps {
  data: Query
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "home/robots.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }: Props) => {
  const [t] = useTranslation()
  const fixed = data.file!.childImageSharp!.fixed!

  return (
    <Layout isMain={true}>
      <SEO title="Yasuhiro Ito" />
      <div className=" mx-auto max-w-6xl pt-12 px-4 pb-6 xs:w-full md:w-11/12 md:mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
          <div className="col-span-1 h-full md:pr-4 mb-4">
            <h1 className="text-xl md:text-6xl mb-4 font-bold">
              {t('author')}
            </h1>
            <h2 className="text-sm text-gray-800 mb-4">
              {t('title')} / {t('location')}
            </h2>
            <p className="text-normal mb-12">{t('self-summary')}</p>
            <Share />
          </div>
          <div className="col-span-1 h-full">
            <h1 className="text-xl md:text-2xl mb-0 font-bold">
              {t('skill-summary')}
            </h1>
            <div className="flex items-center justify-center">
              <SkillSummary />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className=" mx-auto max-w-6xl pt-12 pb-12 px-4 xs:w-full md:w-11/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
            <div className="col-span-1 h-full">
              <div className="hidden md:flex items-center justify-left">
                <Img fixed={fixed as FixedObject} alt="top-image" />
              </div>
            </div>
            <div className="col-span-1 h-full">
              <h1 className="text-black text-xl md:text-2xl font-bold mb-4">
                {t('r-and-d')}
              </h1>
              <p className="text-black text-normal mb-2">
                {t('r-and-d-description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-6xl pt-8 px-4 pb-6 xs:w-full md:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
          <div className="col-span-1 h-full md:pr-4 mb-4">
            <h1 className="text-black text-xl md:text-2xl font-bold mb-4">
              {t('skill-detail')}
            </h1>
            <Programming />
          </div>
          <div className="col-span-1 h-full">
            <h1 className="text-black text-xl md:text-2xl font-bold mb-4">
              {t('environment-detail')}
            </h1>
            <HandsOn />
          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-6xl pt-8 px-4 pb-6 xs:w-full md:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
          <div className="col-span-1 h-full md:pr-4 mb-4">
            <h1 className="text-black text-xl md:text-2xl font-bold mb-4">
              {t('history')}
            </h1>
            <History />
          </div>
          <div className="col-span-1 h-full">
            <h1 className="text-black text-xl md:text-2xl font-bold mb-4">
              {t('others')}
            </h1>
            <Others />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
