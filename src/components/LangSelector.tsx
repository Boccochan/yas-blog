import React, { useState, useEffect, useRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { usePageContext } from '@/i18n/PageContext'
import { GrLanguage } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

const langs = {
  en: {
    selected: 'English',
    ja: 'text-black',
    en: 'text-gray-500 cursor-default',
  },
  ja: {
    selected: '日本語',
    ja: 'text-gray-500 cursor-default',
    en: 'text-black',
  },
}

const LangSelector = () => {
  const [isOpen, setOpen] = useState(false)
  const { originalPath } = usePageContext()
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(langs.en)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLang(i18n.language === 'ja' ? langs.ja : langs.en)

    function handleClickOutside(event) {
      if (
        menuRef !== null &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [i18n.language, menuRef])

  return (
    <div className="relative inline-block text-left h-full">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex item-center h-full cursor-pointer"
      >
        <GrLanguage />
        <p className="hidden md:block ml-2 text-xs">{lang.selected}</p>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <GatsbyLink
              aria-label={`Change language to ja`}
              to={`/ja${originalPath}`}
              className={`w-full block ml-2 ${lang.ja}`}
            >
              日本語
            </GatsbyLink>

            <GatsbyLink
              aria-label={`Change language to en`}
              to={`/en${originalPath}`}
              className={`w-full block ml-2 ${lang.en}`}
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
