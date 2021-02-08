import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { usePageContext } from '@/i18n/PageContext'

const Link = ({ to, ...rest }) => {
  const { lang } = usePageContext()

  return <GatsbyLink {...rest} to={`/${lang}${to}`} />
}

export default Link
