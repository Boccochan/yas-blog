import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { convertToBgImage, BgImage } from 'gbimage-bridge'
import { useTranslation } from 'react-i18next'

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
          <div />
        </BgImage>
        <div className="absolute top-0 left-0 bg-black w-full min-h-screen opacity-75"></div>
        <div className="absolute top-0 left-0 w-full min-h-screen">
          <div className="main-frame text-white">
            <h1 className="text-6xl mt-32 mb-10">Yasuhiro Ito</h1>
            <p className="text-2xl">{t('selfsummary')}</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="bg-red-600 py-4 rounded-sm px-8 opacity-100">
                {t('resume')}
              </button>
              <button className="bg-blue-500 py-4 rounded-sm px-8 opacity-100">
                {t('techblog')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default GbiBridged
