import React, {ReactNode } from 'react'

type Props = {
  text: string
  className?: string
}

export default function SlideLeftToRight({text, className}: Props) {
  return (
    <div className="relative">
      <div className='slide-left-to-right-bar'></div>
      <div className={`slide-left-to-right-text ${className ? className : ""}`}>{text}</div>
    </div>
  )
}
