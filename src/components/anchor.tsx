import React, { ReactNode } from 'react'
import Link from '@/components/link'

interface Props {
  to: string
  children: ReactNode
  currentPath: string
  className?: string
}

const baseStyle = 'menu menu-hover'

const Anchor = ({ to, children, className, currentPath }: Props) => {
  const base = currentPath === to ? `${baseStyle} text-blue-700` : baseStyle
  const style = className === undefined ? base : `${base} ${className}`

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  )
}

export default Anchor
