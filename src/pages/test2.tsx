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
import Hoge from '@/components/Svg/Hoge'
import { BubleCorner, BubleBottom, SmallBuble } from '@/components/Svg/index'

export default function test2() {
  const [t] = useTranslation()

  const { placeholderImage, desktop } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/device.jpg" }) {
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
    <Layout>
      <div className="relative min-h-screen z-0">
        <div className="fixed top-0 right-0">
          <BubleCorner />
        </div>
        <div className="fixed bottom-0 right-10">
          <BubleBottom />
        </div>
        <div className="fixed top-10 right-80">
          <SmallBuble />
        </div>

        <div className="fixed  w-full">
          <div className="md:w-2/3 mx-auto pt-32">
            <div className="grid grid-cols-2 gap-8">
              <div className="">
                <h1 className="text-6xl font-light text-gradation py-4">
                  Software engineer
                </h1>
                <h2 className="text-5xl font-light text-gray-400 mb-4">
                  Yasuhiro Ito
                </h2>
                <h3 className="text-2xl font-light mt-8 mb-4 text-gray-400">
                  Self summary
                </h3>
                <p className="text-gray-400 ">{t('selfsummary')}</p>
                <div className="text-center">
                  <button className="button-gradation mt-8 font-bold py-2 w-full md:w-40 text-white rounded-3xl">
                    Resume
                  </button>
                </div>
              </div>

              <GatsbyImage image={image!} alt="hoge" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-white z-10">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </Layout>
  )
}
