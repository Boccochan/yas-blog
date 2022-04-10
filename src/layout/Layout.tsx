import React, { ReactNode, useState } from 'react'
import Menu from './Menu'

type Props = {
  showMenu?: boolean
  children: ReactNode
}

export default function Layout({ children, showMenu = true }: Props) {
  const [height, setHeight] = useState<number | undefined>(undefined)

  return (
    <div className="wrapper">
      <Menu setHeight={setHeight} />
      {/* {height && (
        <div className="relative" style={{ height }}>
          {children}
        </div>
      )} */}
      <div className="">{children}</div>
    </div>
  )
}
