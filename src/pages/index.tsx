import React, { useState } from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'
import { Share } from '@/components/Bio'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

function customTick({
  payload,
  x,
  y,
  textAnchor,
  stroke,
  radius,
}: {
  payload: { value: string }
  x: number
  y: number
  textAnchor: string
  stroke: string
  radius: string
}) {
  return (
    <g>
      <text
        radius={radius}
        stroke={stroke}
        x={x}
        y={y}
        textAnchor={textAnchor}
        fontSize="12px"
        fill="#666666"
      >
        <tspan x={x} dy="0em">
          {payload.value}
        </tspan>
      </text>
    </g>
  )
}

const IndexPage = () => {
  const [t] = useTranslation()
  const [cy, setGraphCy] = useState('50%')
  const [outerRadius, setRadiusSize] = useState(100)
  const [height, setGraphHeight] = useState(300)

  const skills = [
    {
      subject: 'Leader-ship',
      level: 5,
    },
    {
      subject: 'Front-end',
      level: 4,
    },
    {
      subject: 'Back-end',
      level: 5,
    },
    {
      subject: 'DB',
      level: 3.5,
    },
    {
      subject: 'AWS',
      level: 4,
    },
    {
      subject: 'Teamwork',
      level: 5,
    },
  ]
  return (
    <Layout>
      <SEO title="Yasuhiro Ito" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="col-span-1 h-full md:pr-4 mb-8">
          <h1 className="text-xl md:text-2xl mb-4">{t('author')}</h1>
          <h2 className="text-sm text-gray-700 mb-4">
            {t('title')}@{t('location')}
          </h2>
          <p className="text-normal mb-4">{t('self-summary')}</p>
          <Share />
        </div>
        <div className="col-span-1 h-full">
          <h1 className="text-xl md:text-2xl mb-4">{t('skill-summary')}</h1>
          <RadarChart
            cx="50%"
            cy={cy}
            outerRadius={outerRadius}
            width={400}
            height={height}
            data={skills}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="Yasuhiro"
              dataKey="level"
              // stroke={theme.colors.blue}
              // fill={theme.colors.blue}
              fillOpacity={0.7}
            />
          </RadarChart>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
