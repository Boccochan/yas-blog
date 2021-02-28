import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { usePageContext } from '@/i18n/PageContext'
import { GrLanguage } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

const LangSelector = () => {
  const [isOpen, setOpen] = useState(false)
  const { originalPath } = usePageContext()
  const { i18n } = useTranslation()
  const [lang, setLang] = useState('English')

  // const lang = i18n.language === 'ja' ? '日本語' : 'English'

  useEffect(() => {
    setLang(i18n.language === 'ja' ? '日本語' : 'English')
  }, [i18n.language])

  return (
    <div className="relative inline-block text-left h-full">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex item-center h-full cursor-pointer"
      >
        <GrLanguage />
        <p className="hidden md:block ml-2 text-xs">{lang}</p>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <GatsbyLink
              aria-label={`Change language to ja`}
              to={`/ja${originalPath}`}
              className="w-full block ml-2"
            >
              日本語
            </GatsbyLink>

            <GatsbyLink
              aria-label={`Change language to en`}
              to={`/en${originalPath}`}
              className="w-full block  ml-2"
            >
              English
            </GatsbyLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default LangSelector
