import React from 'react'
import { useTranslation } from 'react-i18next'

const Others = () => {
  const [t] = useTranslation()
  return (
    <div className="text-gray-800 text-normal">
      <div className="flex mb-8">
        <p className="mr-8">{t('education')}</p>
        <div>
          <p className="mb-2">{t('education-unv')}</p>
          <p className="">{t('education-lang')}</p>
        </div>
      </div>
      <div className="flex mb-4">
        <p className="mr-8">{t('lang')}</p>
        <p className="">{t('language')}</p>
      </div>
    </div>
  )
}

export default Others
