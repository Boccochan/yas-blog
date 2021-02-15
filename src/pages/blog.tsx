import React from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import Bio from '@/components/Blog/Bio'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1 className="text-3xl">This is blog</h1>
    <Bio />
  </Layout>
)

export default BlogPage
