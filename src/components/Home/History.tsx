import React from 'react'
import { useTranslation } from 'react-i18next'

interface CompanyProps {
  name: string
  terms: string
  skills: string
  env: string
  description: string
  years: string
}

const Company = ({
  name,
  terms,
  skills,
  env,
  description,
  years,
}: CompanyProps) => {
  return (
    <div className="mb-8 text-gray-800">
      <div className="flex justify-between border-b-2 mb-2 items-end">
        <h1 className="font-bold">{name}</h1>
        <p className="text-xs text-gray-700">{years}</p>
      </div>

      <p className="text-xs mb-1">
        {skills} / {env}
      </p>

      <p className="text-normal">{description}</p>
    </div>
  )
}

const History = () => {
  const [t] = useTranslation()

  const companies = [
    {
      name: t('qualitia-name'),
      terms: t('qualitia-terms'),
      skills: t('qualitia-skills'),
      env: t('qualitia-env'),
      description: t('qualitia-description'),
      years: t('qualitia-years'),
    },
    {
      name: t('debit-name'),
      terms: t('debit-terms'),
      skills: t('debit-skills'),
      env: t('debit-env'),
      description: t('debit-description'),
      years: t('debit-years'),
    },
    {
      name: t('bug-name'),
      terms: t('bug-terms'),
      skills: t('bug-skills'),
      env: t('bug-env'),
      description: t('bug-description'),
      years: t('bug-years'),
    },

    {
      name: t('hsol-name'),
      terms: t('hsol-terms'),
      skills: t('hsol-skills'),
      env: t('hsol-env'),
      description: t('hsol-description'),
      years: t('hsol-years'),
    },
  ]

  console.log(companies)

  return (
    <div className="md:mr-12">
      {companies.map(({ name, terms, skills, env, description, years }) => {
        return (
          <Company
            name={name}
            terms={terms}
            skills={skills}
            env={env}
            description={description}
            years={years}
          />
        )
      })}
    </div>
  )
}

export default History
