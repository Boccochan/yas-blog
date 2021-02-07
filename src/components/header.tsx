import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { ReactElement } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation } from '@reach/router'
import Anchor from '@/components/anchor'

import '@/styles/header.css'

interface HeaderProps {
  siteTitle: string
}

const Menu = ({ currentPath }: { currentPath: string }) => (
  <>
    <li className="md:border-l-2 md:border-black md:pl-6">
      <Anchor
        to="/blog"
        className="md:text-base"
        isSelected={currentPath === 'blog'}
      >
        Yasuhiro Official Blog
      </Anchor>
    </li>
    <li>
      <Anchor
        to="/lab"
        className="menu menu-hover"
        isSelected={currentPath === 'lab'}
      >
        Laboratory
      </Anchor>
    </li>
    <li>
      <Anchor
        to="/contact"
        className="menu menu-hover"
        isSelected={currentPath === 'contact'}
      >
        Contact
      </Anchor>
    </li>
  </>
)

const Header: FunctionComponent<HeaderProps> = ({
  siteTitle,
}: HeaderProps): ReactElement => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const splitted = pathname.split('/')
  const currentPath = splitted.length > 1 ? splitted[1] : '/'

  return (
    <>
      <header className="bg-white">
        <nav className="flex flex-row items-center mx-auto max-w-6xl py-2 px-2">
          <div
            className="md:hidden mr-6 ml-4 text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>

          <h1 className="text-2xl text-center py-1 mr-6">
            <Link to="/" className="text-gray-800">
              {siteTitle}
            </Link>
          </h1>
          <ul className="hidden md:flex md:flex-row w-6/12">
            <Menu currentPath={currentPath} />
          </ul>
        </nav>
      </header>
      {open && (
        <div className="relative">
          <nav className="md:hidden bg-white absolute z-50 w-full shadow-lg">
            <ul>
              <Menu currentPath={currentPath} />
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
