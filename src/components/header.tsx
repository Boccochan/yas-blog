import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="bg-white mb-6">
        <div className="container mx-auto max-w-6xl py-2 px-2">
            <h1 className="text-2xl inline-block text-center py-1 mr-6">
                <Link to="/" className="text-gray-800">
                    {siteTitle}
                </Link>
            </h1>
            <div className="inline-block border-l-2 border-black px-6">
                <Link to="/blog" className="text-gray-800 text-center">
                    Yasuhiro Official Blog
                </Link>
            </div>
        </div>
    </header>
);

export default Header;
