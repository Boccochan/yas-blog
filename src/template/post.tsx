import React from 'react'
import { Query, SitePageContext } from '@/types/graphql-types'
import { graphql, PageRendererProps } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Bio from '@/components/Blog/Bio'
import { useTranslation } from 'react-i18next'

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

export const pageQuery = graphql`
  query MyQueryText($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Post = ({ data, pageContext }: Props) => {
  const [t] = useTranslation()

  const md = data.markdownRemark!
  const html = md.html!
  const date = md.frontmatter!.date!
  const title = md.frontmatter!.title!
  const description = md.frontmatter!.description as string
  const fluid =
    md.frontmatter!.featuredImage == null
      ? undefined
      : md.frontmatter!.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Blog" description={description} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full md:pr-4">
          <p>{date}</p>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="col-span-2 h-full md:col-span-1">
          <p className="text-xl mb-3 text-gray-600">{t('about-author')}</p>
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default Post
