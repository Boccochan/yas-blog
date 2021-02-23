import React from 'react'
import { FluidObject } from 'gatsby-image'
import Img from 'gatsby-image'
import Link from '@/components/Link'

import '@/styles/main.css'

interface SummaryProps {
  title: string
  date: string
  description?: string
  slug: string
  img?: FluidObject
}

interface Props {
  summaries: SummaryProps[]
  styles: {
    frame: string
    inner: string
    title: string
    description?: string
  }
}

const Summaries = ({ summaries, styles }: Props) => {
  const { frame, inner, title: tlStyle, description: ds } = styles
  const fr = `${frame} cursor-pointer`
  const tl = `${tlStyle} inline-block menu-hover`
  return (
    <>
      {summaries.map(({ img, date, title, description, slug }, index) => {
        return (
          <Link key={index} to={`/blogs${slug}`}>
            <div className={fr}>
              {img !== undefined && <Img fluid={img} alt="summary-image" />}
              <div className={inner}>
                <p className="text-xs mb-2 text-gray-600">
                  {new Date(date).toLocaleString()}
                </p>
                <h2 className={tl}>{title}</h2>
                {description !== undefined && (
                  <p className={ds}>{description}</p>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default Summaries
