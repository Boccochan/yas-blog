import React, { ReactNode } from 'react'
import Menu from './Menu'

type Props = {
  showMenu?: boolean
  children: ReactNode
}

export default function Layout({ children, showMenu = true }: Props) {
  return (
    <div className="wrapper">
      <Menu />
      {children}
    </div>
  )
}
