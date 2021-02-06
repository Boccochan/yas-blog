import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { ReactElement } from 'react'
import { FaBars } from 'react-icons/fa'
import '@/styles/header.css'

interface HeaderProps {
  siteTitle: string
}

const Menu = () => {
  return (
    <>
      <li className="md:border-l-2 md:border-black md:px-6">
        <Link
          to="/blog"
          className="text-gray-900 text-center menu menu-hover xs:my-4 xs:ml-4 xs:text-lg md:m-0"
        >
          Yasuhiro Official Blog
        </Link>
      </li>
      <li>
        <Link
          to="/lab"
          className="menu mr-6 menu-hover xs:my-4 xs:ml-4 xs:text-lg md:m-0"
        >
          Laboratory
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="menu menu-hover xs:my-4 xs:ml-4 xs:text-lg md:m-0"
        >
          Contact
        </Link>
      </li>
    </>
  )
}

const Header: FunctionComponent<HeaderProps> = ({
  siteTitle,
}: HeaderProps): ReactElement => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="bg-white">
        <nav className="flex flex-row items-center mx-auto max-w-6xl py-2 px-2">
          <div className="md:hidden mr-6" onClick={() => setOpen(!open)}>
            <FaBars />
          </div>
          <h1 className="text-2xl text-center py-1 mr-6">
            <Link to="/" className="text-gray-800">
              {siteTitle}
            </Link>
          </h1>
          <ul className="hidden md:flex md:flex-row w-6/12">
            <Menu />
          </ul>
        </nav>
      </header>
      {open && (
        <div className="relative ">
          <nav className="md:hidden bg-gray-300 absolute z-50 w-full">
            <ul>
              <Menu />
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
