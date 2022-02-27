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
// import Img, { FixedObject } from 'gatsby-image'

import '@/styles/home.scss'

interface Props extends PageRendererProps {
  data: Query
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "home/home.jpg" }) {
      childImageSharp {
        fixed(width: 600) {
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
      <SEO title="License list" />
      <div className="mx-auto max-w-6xl pt-12 px-4 pb-6 xs:w-full md:w-11/12 md:mb-6">
        <div className="">
          <h1>{t('License list')}</h1>
          <a
            href="https://www.flaticon.com/free-icons/typescript"
            title="typescript icons"
          >
            Typescript icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
