import React, { useCallback, useEffect, useRef } from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import LangSelector from '@/components/LangSelector'

type Props = {
  setHeight: (height: number) => void
}

export default function Index({ setHeight }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const resize = useCallback(() => {
    if (ref !== null && ref.current !== null && typeof window !== 'undefined') {
      setHeight(window.innerHeight - ref.current.clientHeight)
    }
  }, [ref])

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [ref])

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "yi.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  return (
    <div
      className="fixed z-50 w-full bg-white border-gray-300 shadow-sm py-4"
      ref={ref}
    >
      <div className=" w-4/5 mx-auto">
        <div className="flex items-center">
          <div className="flex items-center mr-24">
            <GatsbyImage image={image!} alt="hoge" className="w-12 mr-2" />
            <div className="">
              <h1 className="text-3xl font-bold text-gray-700 cursor-pointer">
                Yasuhiro Ito
              </h1>
              <p className="text-xs text-gray-400">Software engineer</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 mr-24 font-bold">Tech blogs</p>
          <p className="text-xl text-gray-700 font-bold">Resume</p>
          <div className="ml-auto h-full flex items-center justify-left">
            <LangSelector />
          </div>
        </div>
      </div>
    </div>
  )
}
