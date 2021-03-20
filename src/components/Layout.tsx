import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/main.css'

interface Props {
  children: ReactNode
  isMain?: boolean
}

const Layout = ({ children, isMain }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (isMain !== undefined) {
    return (
      <div className="flex flex-col bg-gray-100 w-full min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main className="flex-grow">{children}</main>
        <footer className="flex-none bg-gray-300">
          <p className="p-2 text-center text-xs">
            Copyright © 2021 Yasuhiro Ito. All Rights Reserved.
          </p>
        </footer>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-gray-100 w-full min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex-grow mx-auto max-w-6xl pt-8 px-4 pb-6 xs:w-full md:w-11/12">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
