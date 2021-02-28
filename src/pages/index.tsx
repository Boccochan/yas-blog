import React from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'
import { Share } from '@/components/Bio'
import { graphql, PageRendererProps } from 'gatsby'
import SkillSummary from '@/components/Home/SkillSummary'
import { Query } from '@/types/graphql-types'
import Img from 'gatsby-image'

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

  console.log(data)

  return (
    <Layout isMain={true}>
      <SEO title="Yasuhiro Ito" />
      <div className=" mx-auto max-w-6xl pt-12 px-4 pb-6 xs:w-full md:w-11/12 md:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
          <div className="col-span-1 h-full md:pr-4 mb-4">
            <h1 className="text-xl md:text-2xl mb-10 font-bold">
              {t('author')}
            </h1>
            <h2 className="text-sm text-gray-700 mb-4">
              {t('title')} / {t('location')}
            </h2>
            <p className="text-normal mb-12">{t('self-summary')}</p>
            <Share />
          </div>
          <div className="col-span-1 h-full">
            <h1 className="text-xl md:text-2xl mb-4 font-bold">
              {t('skill-summary')}
            </h1>
            <div className="flex items-center justify-center">
              <SkillSummary />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className=" mx-auto max-w-6xl pt-12 pb-12 px-4 xs:w-full md:w-11/12 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-4">
            <div className="col-span-1 h-full">
              <div className="hidden md:flex items-center justify-left">
                <Img
                  fixed={data.file!.childImageSharp!.fixed}
                  alt="top-image"
                />
              </div>
            </div>
            <div className="col-span-1 h-full">
              <h1 className="text-black text-xl md:text-2xl font-bold mb-8">
                {t('r-and-d')}
              </h1>
              <p className="text-black text-normal mb-2">
                {t('r-and-d-description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
