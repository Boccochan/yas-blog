import React, { useRef, useEffect, useState } from 'react'
import { Query, SitePageContext } from '@/types/graphql-types'
import { graphql, PageRendererProps } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Bio from '@/components/Bio'
import { useTranslation } from 'react-i18next'
import { usePageContext } from '@/i18n/PageContext'
import Img from 'gatsby-image'
// import '@/styles/blog.scss'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share'
import Header from '@/components/Header'
import BlogMenu from '@/components/Blog/Menu'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

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

const createClassName = (tag: string) => {
  switch (tag) {
    case 'H1':
      return ''
    case 'H2':
      return 'text-gray-900 text-2xl font-bold mt-8 mb-2'
    case 'H3':
      return 'text-gray-900 text-xl font-bold mt-8 mb-2'
    case 'H4':
      return ''
    case 'H5':
      return ''
    case 'H6':
      return ''
    case 'H7':
      return ''
    case 'P':
      return 'text-gray-700 text-lg font-normal mb-5'
    default:
      return undefined
  }
}

const Post = ({ data, pageContext }: Props) => {
  const [t] = useTranslation()
  const [els, setEls] = useState<HTMLElement[]>([])
  const [footer, setFooter] = useState<HTMLElement | null>(null)
  const [paragraph, setParagraph] = useState(0)

  const isBottom = (el) =>
    Math.floor(el.getBoundingClientRect().bottom) <= window.innerHeight

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
    if (els.length === 0) {
      setEls(getElements())
    }

    if (doc != null) {
      console.log(doc.childNodes)
      let i = 0
      doc.childNodes.forEach((node) => {
        if (node.nodeName.startsWith('H')) {
          // @ts-ignore 2339 because id exists
          node.id = `h-${i++}`
        }

        const className = createClassName(node.nodeName)

        if (className != null) {
          // @ts-ignore 2339 because className exists
          node.className = className
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

  return (
    <div className="bg-gray-100 ">
      <Header siteTitle={'Yasuhiro Ito'} />
      <SEO title="Blog" description={description} />
      <div className="flex min-h-screen flex-grow mx-auto max-w-6xl mt-4">
        <div className="hidden md:block h-full w-20 py-10">
          <div className="sticky top-0 pt-20 pr-8">
            <div className="w-full flex justify-center items-center mb-8">
              <AiFillLike className="text-gray-600 text-4xl" />
            </div>

            <FacebookShareButton
              url={url}
              className="w-full flex justify-center items-center mb-8"
            >
              <FaFacebookF className=" text-gray-600 text-lg" />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title={title}
              className="w-full flex justify-center items-center mb-8"
            >
              <FaTwitter className=" text-gray-600 text-lg" />
            </TwitterShareButton>
            <LinkedinShareButton
              url={url}
              title={title}
              className="w-full flex justify-center items-center mb-8"
            >
              <FaLinkedinIn className="text-gray-600 text-lg" />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="h-full bg-white p-8">
          <div
            className="blog"
            ref={(content) => (doc = content)}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="hidden md:block h-full w-9/12">
          <BlogMenu els={els} focus={paragraph} />
        </div>
      </div>
      <footer id="footer" className="flex-none bg-gray-300">
        <p className="p-2 text-center text-xs">
          Copyright © 2021 Yasuhiro Ito. All Rights Reserved.
        </p>
      </footer>
    </div>
    // <Layout>
    //   <SEO title="Blog" description={description} />
    //   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
    //     <div className="col-span-2 h-full bg-white p-1 md:p-8">
    //       <p className="text-sm text-gray-500">
    //         {new Date(date).toLocaleString()}
    //       </p>
    //       <h1 className="text-3xl my-4">{title}</h1>
    //       <div className="py-4 border-t border-gray-200 border-solid">
    //         <FacebookShareButton url={url}>
    //           <FacebookIcon size={32} />
    //         </FacebookShareButton>
    //         <TwitterShareButton url={url} title={title} className="ml-2">
    //           <TwitterIcon size={32} />
    //         </TwitterShareButton>
    //         <LinkedinShareButton url={url} title={title} className="ml-2">
    //           <LinkedinIcon size={32} />
    //         </LinkedinShareButton>
    //       </div>
    //       {fluid !== undefined && (
    //         <div className="mb-8">
    //           <Img fluid={fluid} alt="top-image" />
    //         </div>
    //       )}

    //       <div
    //         className="blog"
    //         ref={htmlRef}
    //         dangerouslySetInnerHTML={{ __html: html }}
    //       />
    //     </div>
    //     <div className="col-span-2 h-full md:col-span-1">
    //       <Bio />
    //     </div>
    //   </div>
    // </Layout>
  )
}

export default Post
