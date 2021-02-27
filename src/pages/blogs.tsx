import React, { useState, useEffect } from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import Bio from '@/components/Blog/Bio'
import Summaries, { SummaryProps } from '@/components/Blog/Summaries'
import { useTranslation } from 'react-i18next'
import { graphql, PageRendererProps } from 'gatsby'
import { Query, SitePageContext } from '@/types/graphql-types'

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

export const pageQuery = graphql`
  query MyQuerySummary($lang: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { lang: { eq: $lang } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            lang
            feature
            featuredImage {
              childrenImageSharp {
                fluid(maxWidth: 800, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogPage = ({ data, pageContext }: Props) => {
  const [t] = useTranslation()
  const [blogs, setBlogs] = useState<SummaryProps[]>([])

  console.log(data)

  const filtered = data.allMarkdownRemark!.edges.filter(
    (edge) =>
      edge!.node!.frontmatter!.featuredImage != undefined ||
      edge!.node!.frontmatter!.featuredImage != null
  )

  const summaries = data
    .allMarkdownRemark!.edges.filter(
      ({ node }) => node.frontmatter!.feature === true
    )
    .map(({ node }) => {
      const { title, date, description } = node.frontmatter!
      return {
        title: title as string,
        date: date as string,
        description: description as string,
        slug: node!.fields!.slug as string,
        img: node!.frontmatter!.featuredImage.childrenImageSharp[0].fluid,
      }
    })

  const latests = filtered
    .filter(({ node }) => node.frontmatter!.feature !== true)
    .slice(0, 4)
    .map(({ node }) => {
      const { title, date } = node.frontmatter!
      return {
        title: title as string,
        date: date as string,
        slug: node!.fields!.slug as string,
        img: node!.frontmatter!.featuredImage.childrenImageSharp[0].fluid,
      }
    })

  const maxCount = filtered
    .filter(({ node }) => node.frontmatter!.feature !== true)
    .slice(4).length

  const onSeeMore = () => {
    const count = maxCount - blogs.length > 8 ? blogs.length + 8 : maxCount
    console.log(count)
    setBlogs(
      filtered
        .filter(({ node }) => node.frontmatter!.feature !== true)
        .slice(4, 4 + count)
        .map(({ node }) => {
          const { title, date } = node.frontmatter!
          return {
            title: title as string,
            date: date as string,
            slug: node!.fields!.slug as string,
            img: node!.frontmatter!.featuredImage.childrenImageSharp[0].fluid,
          }
        })
    )
    console.log('Hello', blogs)
  }

  useEffect(() => {
    const count = maxCount - blogs.length > 8 ? blogs.length + 8 : maxCount

    console.log(filtered)
    setBlogs(
      filtered
        .filter(({ node }) => node.frontmatter!.feature !== true)
        .slice(4, 4 + count)
        .map(({ node }) => {
          const { title, date } = node.frontmatter!
          return {
            title: title as string,
            date: date as string,
            slug: node!.fields!.slug as string,
            img: node!.frontmatter!.featuredImage.childrenImageSharp[0].fluid,
          }
        })
    )
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full md:pr-4">
          <p className="text-xl mb-3 text-gray-600">{t('posts')}</p>
          <Summaries
            summaries={summaries}
            styles={{
              frame: 'h-blog-summary-md md:h-blog-summary bg-white mb-8',
              inner: 'px-2 py-2 md:px-6 md:py-8',
              title: 'text-md md:text-xl mb-3 font-bold',
              description: 'text-sm md:text-normal',
            }}
          />
        </div>
        <div className="col-span-2 h-full md:col-span-1">
          <div className="mb-4">
            <p className="text-xl mb-3 text-gray-600">{t('about-author')}</p>
            <Bio />
          </div>
          <p className="text-xl mb-3 text-gray-600">{t('latest-post')}</p>
          <Summaries
            summaries={latests}
            styles={{
              frame: 'h-blog-list-summary md:h-blog-summary-md bg-white mb-8',
              inner: 'px-2 py-2',
              title: 'text-sm md:text-md mb-3 font-bold',
            }}
          />
        </div>
      </div>
      <p className="text-xl mb-3 text-gray-500">{t('blog-list')}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        <Summaries
          summaries={blogs}
          styles={{
            frame: 'h-blog-list-summary bg-white',
            inner: 'px-2 py-1',
            title: 'text-sm mb-3 font-bold',
          }}
        />
        {maxCount > blogs.length && (
          <div
            onClick={onSeeMore}
            className="bg-blue-600 text-center text-gray-100 md:w-6/12 xs:w-36 py-2 cursor-pointer"
          >
            <div>{t('see-more')}</div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default BlogPage
