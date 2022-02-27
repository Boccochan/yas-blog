import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { convertToBgImage, BgImage } from 'gbimage-bridge'
import { useTranslation } from 'react-i18next'
import { MdArrowForwardIos } from 'react-icons/md'

// https://www.shutterstock.com/ja/image-photo/coding-code-program-programming-developer-compute-517228426

const GbiBridged = () => {
  const [t] = useTranslation()
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/home10.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              # width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <Layout isMain={true}>
      <SEO title="Yasuhiro Ito" />
      <div className="relative w-full min-h-screen">
        <BgImage image={image} className="w-full min-h-screen">
          <div className="main-overlay w-full min-h-screen">
            <div className="main-frame text-white">
              <h1 className="text-6xl mt-4 md:mt-32 mb-8">Yasuhiro Ito</h1>
              <p className="text-2xl">{t('selfsummary')}</p>
              <div className="my-8 md:mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-600 rounded-sm flex items-center py-4">
                  <div className="flex items-center h-full mx-auto">
                    <div className="mr-4">{t('resume')}</div>
                    <MdArrowForwardIos />
                  </div>
                </div>
                <div className="border border-white rounded-sm flex items-center py-4">
                  <div className="flex items-center h-full mx-auto">
                    <div className="mr-4">{t('techblog')}</div>
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BgImage>
      </div>
    </Layout>
  )
}
export default GbiBridged
