import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import SEO from '@/components/Seo'
// import Layout from '@/components/Layout'
import { convertToBgImage, BgImage } from 'gbimage-bridge'
import { useTranslation } from 'react-i18next'
import { MdArrowForwardIos } from 'react-icons/md'
import Skills from '@/components/Home/Skills'
import { Test, Home } from '@/components/Svg/index'
import SlideLeftToRight from '@/components/Parts/SlideLeftToRight'
import Layout from '@/layout/Layout'

export default function test2() {
  const [t] = useTranslation()

  const { placeholderImage, desktop } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/devices.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              # width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        desktop: file(relativePath: { eq: "home/desktop.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  return (
    <Layout showMenu={false}>
      <div className="centralize">
        <SlideLeftToRight
          text={'Yasuhiro Ito'}
          className="text-5xl font-bold fade-in-fade-out"
        />
      </div>
      <div className="slide-bottom-to-top" />
      <div className="relative w-full min-h-screen">
        <div className="grid grid-cols-2">
          <div className="w-124">
            <h1 className="text-6xl font-light text-gradation py-4">
              Software engineer
            </h1>
            <h2 className="text-5xl font-light text-gray-400 mb-4">
              Yasuhiro Ito
            </h2>
            <h3 className="text-4xl font-light mt-8 mb-4 text-gray-400">
              Self summary
            </h3>
            <p className="text-gray-600 ">{t('selfsummary')}</p>
          </div>
          <GatsbyImage image={image!} alt="hoge" />
        </div>
        <div className="ml-auto w-1/2">
          <GatsbyImage image={image!} alt="hoge" />
        </div>

        {/* <BgImage image={image}>
          <div className="relative w-full min-h-screen">
            <h1>hello</h1>
          </div>
        </BgImage> */}
      </div>
    </Layout>
  )
}
