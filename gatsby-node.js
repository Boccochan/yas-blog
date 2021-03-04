require('ts-node').register({ files: true })

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)

const config = require('./gatsby-config')
require('source-map-support').install()

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = `/${createFilePath({ node, getNode }).split('/')[2]}`

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = require('./src/template/createPosts').createPages

/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development'
  const originalPath = page.path

  // Delete the original page (since we are gonna create localized versions of it) and add a
  // redirect header
  await deletePage(page)

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async (lang) => {
      const localizedPath = `/${lang}${page.path}`

      // create a redirect based on the accept-language header
      createRedirect({
        fromPath: originalPath,
        toPath: localizedPath,
        Language: lang,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      })

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
        },
      })
      // }
    })
  )

  // Create a fallback redirect if the language is not supported or the
  // Accept-Language header is missing for some reason
  createRedirect({
    fromPath: originalPath,
    toPath: `/${config.siteMetadata.defaultLanguage}${page.path}`,
    isPermanent: false,
    redirectInBrowser: isEnvDevelopment,
    statusCode: 301,
  })
}
