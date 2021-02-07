import React from 'react'
import { FunctionComponent } from 'react'
import { ReactElement } from 'react'

import Layout from '@/components/layout'
import Image from '@/components/image'
import SEO from '@/components/seo'

const BlogPage: FunctionComponent = (): ReactElement => (
  <Layout>
    <SEO title="Blog" />
    <h1 className="text-3xl">This is blog</h1>
  </Layout>
)

export default BlogPage
