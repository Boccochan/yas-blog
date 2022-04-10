import * as React from 'react'
import { SVGProps } from 'react'

const SvgSmallBuble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30mm"
    height="30mm"
    viewBox="0 0 30 30"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="small-buble_svg__b">
        <stop
          style={{
            stopColor: '#045de9',
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: '#09c6f9',
            stopOpacity: 1,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient id="small-buble_svg__a">
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
        xlinkHref="#small-buble_svg__a"
        id="small-buble_svg__d"
        gradientUnits="userSpaceOnUse"
        x1={157.075}
        y1={430.15}
        x2={48.027}
        y2={454.459}
        gradientTransform="matrix(1.40942 0 0 1.38054 -207.378 -211.715)"
      />
      <linearGradient
        xlinkHref="#small-buble_svg__b"
        id="small-buble_svg__c"
        gradientUnits="userSpaceOnUse"
        x1={171.278}
        y1={449.044}
        x2={86.852}
        y2={451.471}
        gradientTransform="matrix(.70471 0 0 .69027 178.984 247.416)"
      />
      <linearGradient
        xlinkHref="#small-buble_svg__b"
        id="small-buble_svg__e"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(.35236 0 0 .34513 153.352 386.496)"
        x1={171.278}
        y1={449.044}
        x2={86.852}
        y2={451.471}
      />
      <linearGradient
        xlinkHref="#small-buble_svg__b"
        id="small-buble_svg__f"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(.4698 0 0 .46018 177.871 208.044)"
        x1={171.278}
        y1={449.044}
        x2={86.852}
        y2={451.471}
      />
    </defs>
    <g transform="translate(-183.85 -527.502)">
      <circle
        style={{
          fill: 'url(#small-buble_svg__c)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.184824,
          strokeLinejoin: 'round',
        }}
        cx={269.978}
        cy={559.427}
        r={29.908}
      />
      <circle
        style={{
          fill: 'url(#small-buble_svg__d)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.36965,
          strokeLinejoin: 'round',
        }}
        cx={-25.39}
        cy={412.307}
        r={59.815}
      />
      <circle
        style={{
          fill: 'url(#small-buble_svg__e)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.0924121,
          strokeLinejoin: 'round',
        }}
        cx={198.849}
        cy={542.502}
        r={14.954}
      />
      <circle
        style={{
          fill: 'url(#small-buble_svg__f)',
          fillOpacity: 1,
          stroke: '#fff',
          strokeWidth: 0.123216,
          strokeLinejoin: 'round',
        }}
        cx={238.534}
        cy={416.051}
        r={19.938}
      />
    </g>
  </svg>
)

export default SvgSmallBuble
