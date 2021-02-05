import { Link } from 'gatsby'
import React from 'react'
import { FunctionComponent } from 'react'
import { ReactElement } from 'react'
import '@/styles/header.css'

interface HeaderProps {
    siteTitle: string
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="bg-white mb-6">
        <div className="flex flex-row items-center mx-auto max-w-6xl py-2 px-2">
            <h1 className="text-2xl text-center py-1 mr-6">
                <Link to="/" className="text-gray-800">
                    {siteTitle}
                </Link>
            </h1>
            <div className="flex flex-row w-6/12">
                <div className="border-l-2 border-black px-6">
                    <Link to="/blog" className="text-gray-900 text-center menu">
                        Yasuhiro Official Blog
                    </Link>
                </div>
                <div>
                    <Link
                        to="/lab"
                        className="text-gray-900 text-center mr-6 menu font-light text-sm"
                    >
                        Laboratory
                    </Link>
                </div>
                <div>
                    <Link
                        to="/contact"
                        className="text-gray-900 text-center menu font-light text-sm"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

export default Header
