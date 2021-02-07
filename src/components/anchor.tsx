import { Link } from 'gatsby'
import React, { useState } from 'react'
import { ReactNode } from 'react'

interface Props {
  to: string
  children: ReactNode
  isSelected: boolean
  className?: string
}

const baseStyle = 'menu menu-hover'

const Anchor = ({ to, children, className, isSelected }: Props) => {
  const base = isSelected ? `${baseStyle} text-blue-700` : baseStyle
  const style = className === undefined ? base : `${base} ${className}`

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  )
}

export default Anchor
