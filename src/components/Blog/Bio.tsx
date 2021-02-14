import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import Link from '@/components/Link'

const query = graphql`
  query {
    allFile(filter: {relativePath: {}, relativeDirectory: {eq: "bio"}}) {
      edges {
        node {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const meStyle = {
  width: "75px",
  height: "75px",
  borderRadius: "50%",
};

const githubStyle = {
  width: "16px",
  height: "16px",
  float: "left"
};

const twitterStyle = {
  width: "18px",
  height: "16px",
  float: "left"
};

const filterImg = (data: any, name: string) => {
  const img = data.allFile.edges.filter(edge => edge.node.childImageSharp.fixed.src.endsWith(name))[0]
  return img.node.childImageSharp.fixed
}

const Bio = () => {
  const data = useStaticQuery(query)
  const [t] = useTranslation()

  const me = filterImg(data, 'me.jpg')
  const github = filterImg(data, 'github-logo.png')
  const twitter = filterImg(data, 'twitter-logo.png')

  console.log(data)

  return (
    <div className='max-w-md p-6 bg-white'>
      <Img fixed={me} alt='author-image' style={meStyle}/>
      <div className='mb-6'>
        <h3 className="my-4 font-bold">{t('author')}</h3>
        <p className="text-gray-700">{t('summary')}</p>
      </div>
      <div className='mb-6'>
        <div className="mb-4">
          <a href="https://github.com/Boccochan">
            <Img fixed={github} alt='author-image' style={githubStyle}/>
            <p className='pl-10'>Boccochan</p>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/yasuhiro_it">
            <Img fixed={twitter} alt='author-image' style={twitterStyle}/>
            <p className='pl-10'>yasuhiro_it</p>
          </a>
        </div>
      </div>
      <div className="bg-blue-500 text-center text-gray-100 md:w-6/12 xs:w-36 py-2">
        <Link to='/' >{t('go-to-cv')}</Link>
      </div>
        
    </div>
  )
}

export default Bio