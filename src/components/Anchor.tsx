import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import { usePageContext } from '@/i18n/PageContext'
import { useLocation } from '@reach/router'

interface Props {
  to: string
  children: ReactNode
  className?: string
}

const Anchor = ({ to, children, className }: Props) => {
  const { lang } = usePageContext()
  const { pathname } = useLocation()

  const nextPath = `/${lang}${to}`
  const style =
    pathname.split('/')[2] === to.split('/')[1]
      ? `${className} text-blue-700 font-normal`
      : `${className} font-normal`

  return (
    <Link to={nextPath} className={style}>
      {children}
    </Link>
  )
}

export default Anchor
