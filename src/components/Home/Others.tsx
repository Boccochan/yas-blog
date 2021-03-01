import React from 'react'
import { useTranslation } from 'react-i18next'

const Others = () => {
  const [t] = useTranslation()
  return (
    <div>
      <div className="flex mb-4">
        <p className="text-sm mr-4">{t('education')}</p>
        <div>
          <p className="text-sm">{t('education-unv')}</p>
          <p className="text-sm">{t('education-lang')}</p>
        </div>
      </div>
      <div className="flex mb-4">
        <p className="text-sm mr-4">{t('lang')}</p>
        <p className="text-sm">{t('language')}</p>
      </div>
    </div>
  )
}

export default Others
