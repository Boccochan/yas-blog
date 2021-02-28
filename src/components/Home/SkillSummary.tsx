import React, { useState, useEffect } from 'react'

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

const SkillSummary = () => {
  const [cy, setGraphCy] = useState('50%')
  const [outerRadius, setRadiusSize] = useState(100)
  const [height, setGraphHeight] = useState(300)
  const [width, setWidth] = useState(400)

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

  const resizeWindow = () => {
    const innerWidth = window.innerWidth

    if (innerWidth < 768) {
      console.log(2222, innerWidth)
      setGraphCy('45%')
      setRadiusSize(80)
      // 0.8 is needed since some smartphone does not return proper width
      setWidth(innerWidth * 0.8)
      setGraphHeight(220)
    }
  }

  useEffect(() => {
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])
  return (
    <RadarChart
      cx="50%"
      cy={cy}
      outerRadius={outerRadius}
      width={width}
      height={height}
      data={skills}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={customTick} />
      <PolarRadiusAxis domain={[0, 5]} />
      <Radar
        name="Yasuhiro"
        dataKey="level"
        stroke={'#23C4F8'}
        fill={'#23C4F8'}
        fillOpacity={0.7}
      />
    </RadarChart>
  )
}

export default SkillSummary
