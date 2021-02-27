import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Anchor from '@/components/Anchor'

import '@/styles/header.css'
import '@/styles/main.css'

interface Props {
  siteTitle: string
}

const Menu = () => (
  <>
    <li className="md:border-l-2 md:border-black md:pl-6">
      <Anchor to="/blogs" className="menu menu-hover md:text-base">
        Yasuhiro Official Blog
      </Anchor>
    </li>
    <li>
      <Anchor to="/contact" className="menu menu-hover">
        Contact
      </Anchor>
    </li>
  </>
)

const Header = ({ siteTitle }: Props) => {
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
            <Anchor to="/" className="text-gray-800">
              {siteTitle}
            </Anchor>
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
