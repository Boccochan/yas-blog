import React from 'react'
import { FixedObject } from 'gatsby-image'
import Img from 'gatsby-image'

interface Props {
  img: FixedObject
  date: Date
  title: string
}

const Summary = ({ img, date, title }: Props) => {
  return (
    <div className="w-full">
      <Img fixed={img} alt="summary-image" />
      <div>
        <h2>{date}</h2>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Summary
