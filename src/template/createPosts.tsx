import path from 'path'

interface Post {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      lang: string
    }
  }
}

interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

type GatsbyCreatePages = (fns: {
  graphql: any
  boundActionCreators: BoundActionCreators
}) => void

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              lang
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  // Create blog posts pages.
  const posts = allMarkdown.data.allMarkdownRemark.edges

  posts.forEach((post: Post, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const lang =
      post.node.frontmatter.lang === undefined
        ? 'ja'
        : post.node.frontmatter.lang

    createPage({
      path: `/${lang}/blogs${post.node.fields.slug}`,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/template/post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug,
        lang,
      },
    })
  })

  return null
}
