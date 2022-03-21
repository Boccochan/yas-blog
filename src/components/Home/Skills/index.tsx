import React from 'react'
import ReactIcon from './React'
import Python from './Python'
import Typescript from './Typescript'
import Aws from './Aws'
import Github from './Github'
import { useTranslation } from 'react-i18next'

export default function Index() {
  const [t] = useTranslation()

  return (
    <>
      <h2 className="text-4xl font-bold text-gray-600 mt-4 mb-8">
        {t('skillsSummary')}
      </h2>
      {/* <div className="grid grid-cols-5 gap-4">
        <Typescript />
        <ReactIcon />
        <Python />
        <Github />
        <Aws />
      </div> */}
      <p className="my-8 text-lg text-gray-600">
        {t('skillsIntroduction')}
      </p>
    </>
  )
}
