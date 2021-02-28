import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import Link from '@/components/Link'
import Share from '@/components/Bio'

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

const meStyle = {
  width: '75px',
  height: '75px',
  borderRadius: '50%',
}

const Bio = () => {
  const data = useStaticQuery(query)
  const [t] = useTranslation()
  const me = data.file.childImageSharp.fixed

  return (
    <div className="p-6 bg-white">
      <Img fixed={me} alt="author-image" style={meStyle} />
      <div className="mb-6">
        <h3 className="my-4 font-bold">{t('author')}</h3>
        <p className="text-gray-700">{t('summary')}</p>
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
