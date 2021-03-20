import React, { useEffect, useState } from 'react'
import { Query, SitePageContext } from '@/types/graphql-types'
import { graphql, PageRendererProps } from 'gatsby'
import SEO from '@/components/Seo'
import Bio from '@/components/Bio'
import { useTranslation } from 'react-i18next'
import Summaries from '@/components/Blog/Summaries'

import Img from 'gatsby-image'
import Header from '@/components/Header'
import BlogMenu from '@/components/Blog/Menu'
import SnsMobile from '@/components/Sns/Mobile'
import SnsLaptop from '@/components/Sns/Laptop'
import Likes from '@/components/Sns/Likes'
import Footer from '@/components/Footer'
import '@/styles/blog.scss'

interface Props extends PageRendererProps {
  pageContext: any
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

const getElements = () => {
  let i = 0
  const els: HTMLElement[] = []
  while (true) {
    const el = document.getElementById(`h-${i++}`)
    if (el != null) {
      els.push(el)
    } else {
      break
    }
  }

  return els
}

const Post = ({ data, pageContext }: Props) => {
  const [t] = useTranslation()
  const [els, setEls] = useState<HTMLElement[]>([])
  const [footer, setFooter] = useState<HTMLElement | null>(null)
  const [paragraph, setParagraph] = useState(0)

  const isBottom = (el) => {
    if (el != null) {
      return Math.floor(el.getBoundingClientRect().bottom) <= window.innerHeight
    }
    return false
  }

  let doc: HTMLDivElement | null = null

  function traceScroll() {
    const result = els.filter(
      (el) => el != null && el.getBoundingClientRect().top <= 40
    )

    if (result.length === 0) {
      setParagraph(0)
    } else {
      setParagraph(result.length - 1)
    }

    if (isBottom(footer)) {
      setParagraph(els.length - 1)
    }
  }

  useEffect(() => {
    if (els.length <= 1) {
      setEls(getElements())
    }

    if (doc != null) {
      let i = 1
      doc.childNodes.forEach((node) => {
        if (node.nodeName.startsWith('H')) {
          // @ts-ignore 2339 because id exists
          node.id = `h-${i++}`
        }
      })
    }

    if (footer == null) {
      setFooter(document.getElementById('footer'))
    }
    function watchScroll() {
      window.addEventListener('scroll', traceScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', traceScroll)
    }
  })

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
  const { previous, next } = pageContext
  console.log(pageContext)

  console.log(previous)
  console.log(next)

  const previousSummary =
    previous != null
      ? {
          title: previous.frontmatter.title as string,
          date: previous.frontmatter.date as string,
          slug: previous.fields.slug as string,
          img: previous.frontmatter.featuredImage.childrenImageSharp[0].fluid,
        }
      : null

  const nextSummary =
    next != null
      ? {
          title: next.frontmatter.title as string,
          date: next.frontmatter.date as string,
          slug: next.fields.slug as string,
          img: next.frontmatter.featuredImage.childrenImageSharp[0].fluid,
        }
      : null

  return (
    <div className="bg-gray-100 ">
      <Header siteTitle={'Yasuhiro Ito'} langSelector={false} />
      <SEO title="Blog" description={description} />
      <div className="flex min-h-screen h-full flex-grow mx-auto md:max-w-6xl mt-4">
        <div className="hidden md:block h-full w-20 py-10">
          <div className="sticky top-0 pt-20 pr-8">
            <SnsLaptop title={title} url={url} />
          </div>
        </div>
        <div className="h-full">
          <div className="h-full bg-white w-full p-1 md:p-8">
            <p className="text-sm text-gray-800">
              {new Date(date).toLocaleString()}
            </p>
            <h1 id="h-0" className="text-2xl md:text-4xl mb-4 font-bold">
              {title}
            </h1>
            <SnsMobile title={title} url={url} />
            {fluid !== undefined && (
              <div className="mb-8">
                <Img fluid={fluid} alt="top-image" />
              </div>
            )}
            <div
              className="blog"
              ref={(content) => (doc = content)}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="w-full flex justify-start items-center ">
              <Likes />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 h-full">
            <div className=" h-full">
              {previousSummary != null && (
                <>
                  <h1 className="mb-2">{t('previous-post')}</h1>
                  <Summaries
                    summaries={[previousSummary]}
                    styles={{
                      frame: 'blog-nav-xs md:blog-nav-md bg-white',
                      inner: 'px-2 py-1',
                      title: 'text-xs mb-3 font-bold',
                    }}
                  />
                </>
              )}
            </div>

            <div className=" h-full">
              {nextSummary != null && (
                <>
                  <h1 className="mb-2">{t('next-post')}</h1>
                  <Summaries
                    summaries={[nextSummary]}
                    styles={{
                      frame: 'blog-nav-xs md:blog-nav-md bg-white',
                      inner: 'px-2 py-1',
                      title: 'text-xs mb-3 font-bold',
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:block h-full w-4/12 mx-4">
          <div className="h-full sticky top-0">
            <p className="text-xl mb-3 text-gray-600">{t('about-author')}</p>
            <Bio />
            <BlogMenu els={els} focus={paragraph} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Post
