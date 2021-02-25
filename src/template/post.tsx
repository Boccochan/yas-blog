import React from 'react'
import { Query, SitePageContext } from '@/types/graphql-types'
import { graphql, PageRendererProps } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Bio from '@/components/Blog/Bio'
import { useTranslation } from 'react-i18next'
import { usePageContext } from '@/i18n/PageContext'
import Img from 'gatsby-image'
import '@/styles/blog.scss'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'

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
        date
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
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
  const url = location.href ? location.href : ''

  return (
    <Layout>
      <SEO title="Blog" description={description} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full bg-white p-1 md:p-8">
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleString()}
          </p>
          <h1 className="text-3xl my-4">{title}</h1>
          <div className="py-4 border-t border-gray-200 border-solid">
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title} className="ml-2">
              <TwitterIcon size={32} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title} className="ml-2">
              <LinkedinIcon size={32} />
            </LinkedinShareButton>
          </div>
          {fluid !== undefined && (
            <div className="mb-8">
              <Img fluid={fluid} alt="top-image" />
            </div>
          )}

          <div className="blog" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="col-span-2 h-full md:col-span-1">
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default Post
