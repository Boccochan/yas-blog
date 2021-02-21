import React from 'react'
import { FixedObject } from 'gatsby-image'
import Img from 'gatsby-image'

interface SummaryProps {
  title: string
  date: Date
  description: string
  link: string
  img?: FixedObject
}

interface Props {
  summaries: SummaryProps[]
  className: string
}

const Summaries = ({ summaries, className }: Props) => {
  return (
    <>
      {summaries.map(({ img, date, title, description, link }) => {
        return (
          <div className={className}>
            {img !== undefined && <Img fixed={img} alt="summary-image" />}
            <div className="px-6 py-8">
              <h2>{date.toDateString()}</h2>
              <p>{title}</p>
              <p>{description}</p>
              <p>{link}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Summaries
