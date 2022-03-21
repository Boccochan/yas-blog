import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import { convertToBgImage, BgImage } from 'gbimage-bridge'
import { useTranslation } from 'react-i18next'
import { MdArrowForwardIos } from 'react-icons/md'
import Skills from '@/components/Home/Skills'
import {Test, Home} from '@/components/Svg/index'

export default function test2() {
  return (
    <div className="hoge">
      <div className="gravini">
        <div className="slide-bar" />
        <h1>Hello World!</h1>
      </div>
    </div>
  )
}
