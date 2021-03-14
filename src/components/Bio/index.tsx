import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import Link from '@/components/Link'
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

const query = graphql`
  query {
    file(relativePath: { eq: "bio/me.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Github = () => (
  <a href="https://github.com/Boccochan" className="flex items-center">
    <FaGithub size="18px" />
    <p className="pl-2 text-xs">Boccochan</p>
  </a>
)

const Twitter = () => (
  <a href="https://twitter.com/yasuhiro_it" className="flex items-center">
    <FaTwitter size="18px" />
    <p className="pl-2 text-xs">@yasuhiro_it</p>
  </a>
)

const Email = () => (
  <a
    href="mailto:yasuhiro0312q@gmail.com?subject=件名"
    className="flex items-center"
  >
    <FaEnvelope size="18px" />
    <p className="pl-2 text-xs">yasuhiro0312q@gmail.com</p>
  </a>
)

export const Share = () => {
  return (
    <>
      <div className="mb-2">
        <Email />
      </div>
      <div className="mb-2">
        <Github />
      </div>
      <div className="mb-2">
        <Twitter />
      </div>
    </>
  )
}

const meStyle = {
  width: '75px',
  height: '75px',
  borderRadius: '50%',
}

interface Props {
  showSummary?: boolean
}

const Bio = ({ showSummary }: Props) => {
  const data = useStaticQuery(query)
  const [t] = useTranslation()
  const me = data.file.childImageSharp.fixed

  return (
    <div className="p-6 bg-white">
      <Img fixed={me} alt="author-image" style={meStyle} />
      <div className="mb-6">
        <h3 className="my-4 font-bold">{t('author')}</h3>
        {showSummary && <p className="text-gray-700">{t('summary')}</p>}
      </div>
      <div className="mb-6">
        <Share />
      </div>
      <div className="bg-blue-600 text-center text-gray-100 md:w-6/12 xs:w-36 py-2 cursor-pointer">
        <Link to="/">{t('go-to-cv')}</Link>
      </div>
    </div>
  )
}

export default Bio
