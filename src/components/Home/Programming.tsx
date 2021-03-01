import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Programming = () => {
  const skills = [
    {
      lang: 'Typescript',
      point: 4,
    },
    {
      lang: 'Python3',
      point: 3,
    },
    {
      lang: 'React',
      point: 3,
    },
    {
      lang: 'AWS',
      point: 3,
    },
    {
      lang: 'SQL',
      point: 3,
    },
  ]
  return (
    <div>
      {skills.map(({ lang, point }, index) => {
        return (
          <div className="flex mb-1 items-center" key={index}>
            <p className="mr-4 w-20">{lang}</p>
            {[...Array(5)].map((_, index) => {
              if (index < point) {
                return <BsStarFill color="#24C7BC" className="mr-4" />
              }
              return <BsStarFill color="black" className="mr-4" />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Programming
