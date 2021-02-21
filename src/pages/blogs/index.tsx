import React from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import Bio from '@/components/Blog/Bio'
import Post from '@/components/Blog/Post'
import Summaries from '@/components/Blog/Summaries'
import { useTranslation } from 'react-i18next'

const BlogPage = () => {
  const [t] = useTranslation()
  const summaries = [
    {
      title: 'This is sample summary 1',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 1",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 2',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 2",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 3',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 3",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 4',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 4",
      link: 'this.is.link',
    },
  ]

  const latests = [
    {
      title: 'This is sample summary 1',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 1",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 2',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 2",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 3',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 3",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 4',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 4",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 5',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 1",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 6',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 2",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 7',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 3",
      link: 'this.is.link',
    },
    {
      title: 'This is sample summary 8',
      date: new Date(),
      description: "This is a sample summary, it's okay. hello world 4",
      link: 'this.is.link',
    },
  ]

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full md:pr-4">
          <p className="text-xl mb-3 text-gray-500">{t('posts')}</p>
          <Summaries summaries={summaries} height="h-blog-summary" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <p className="text-xl mb-3 text-gray-500">{t('about-author')}</p>
            <Bio />
          </div>
          <p className="text-xl mb-3 text-gray-500">{t('latest-post')}</p>
          <Summaries summaries={latests} height="h-24" />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
