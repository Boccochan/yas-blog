import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { ReactElement } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
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
          className="menu menu-hover md:text-base md:font-normal"
        >
          Yasuhiro Official Blog
        </Link>
      </li>
      <li>
        <Link to="/lab" className="menu menu-hover">
          Laboratory
        </Link>
      </li>
      <li>
        <Link to="/contact" className="menu menu-hover">
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
            <Menu />
          </ul>
        </nav>
      </header>
      {open && (
        <div className="relative">
          <nav className="md:hidden bg-white absolute z-50 w-full shadow-lg">
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
