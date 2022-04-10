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
      <SEO title="Yasuhiro Ito" />
      <div className="mx-auto max-w-6xl pt-12 px-4 pb-6 xs:w-full md:w-11/12 md:mb-6">
        <div className="flex items-center">
          <h1>Hello</h1>
          <div className="ml-auto">
            <Img fixed={fixed as FixedObject} alt="top-image" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage