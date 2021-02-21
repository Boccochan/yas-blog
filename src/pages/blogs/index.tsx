import React from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import Bio from '@/components/Blog/Bio'
import Post from '@/components/Blog/Post'
import { useTranslation } from 'react-i18next'

const BlogPage = () => {
  const [t] = useTranslation()

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full pr-4">
          <p className="text-xl mb-3 text-gray-500">{t('posts')}</p>
          <Post />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-xl mb-3 text-gray-500">{t('about-author')}</p>
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
