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
import SlideLeftToRight from '@/components/Parts/SlideLeftToRight'

export default function test2() {
  return (
    <div className="wrapper">
      <div className="centralize">
        <SlideLeftToRight text={"Yasuhiro Ito. Hey hey my my"}/>
      </div>
    </div>
  )
}
