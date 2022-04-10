import * as React from 'react'
import { SVGProps } from 'react'

const SvgHoge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="120mm"
    height="120mm"
    viewBox="0 0 120 120"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="hoge_svg__a">
        <stop
          style={{
            stopColor: '#09c6f9',
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: '#09c6f9',
            stopOpacity: 0,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#hoge_svg__a"
        id="hoge_svg__c"
        gradientUnits="userSpaceOnUse"
        x1={179.348}
        y1={459.272}
        x2={104.998}
        y2={463.175}
        gradientTransform="translate(79.286 102.428)"
      />
      <linearGradient
        xlinkHref="#hoge_svg__a"
        id="hoge_svg__b"
        x1={157.075}
        y1={430.15}
        x2={48.027}
        y2={454.459}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#hoge_svg__a"
        id="hoge_svg__d"
        gradientUnits="userSpaceOnUse"
        x1={157.075}
        y1={430.15}
        x2={48.027}
        y2={454.459}
        gradientTransform="matrix(.70471 0 0 .69027 -49.164 274.812)"
      />
      <linearGradient
        xlinkHref="#hoge_svg__a"
        id="hoge_svg__e"
        gradientUnits="userSpaceOnUse"
        x1={157.075}
        y1={430.15}
        x2={48.027}
        y2={454.459}
        gradientTransform="matrix(1.40942 0 0 1.38054 -207.378 -211.715)"
      />
    </defs>
    <g transform="translate(85.39 -352.307)">
      <ellipse
        style={{
          fill: 'url(#hoge_svg__b)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.264999,
          strokeLinejoin: 'round',
        }}
        cx={129.122}
        cy={452.014}
        rx={42.439}
        ry={43.328}
      />
      <ellipse
        style={{
          fill: 'url(#hoge_svg__c)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.264999,
          strokeLinejoin: 'round',
        }}
        cx={221.207}
        cy={564.692}
        rx={28.366}
        ry={29.672}
      />
      <circle
        style={{
          fill: 'url(#hoge_svg__d)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.184824,
          strokeLinejoin: 'round',
        }}
        cx={41.829}
        cy={586.822}
        r={29.908}
      />
      <circle
        style={{
          fill: 'url(#hoge_svg__e)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.36965,
          strokeLinejoin: 'round',
        }}
        cx={-25.39}
        cy={412.307}
        r={59.815}
      />
    </g>
  </svg>
)

export default SvgHoge
