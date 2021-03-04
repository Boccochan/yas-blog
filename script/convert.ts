const fs = require('fs')
// const fsExtra = require("fs-extra");
const sharp = require('sharp')
const moment = require('moment-timezone')

const createLines = (lines: string[]) => {
  let index = 0

  return `${lines
    .map((line) => {
      if (line.startsWith('#')) {
        const splited = line.split(' ')
        const i = splited[0].length
        return `<h${i + 1} id="h-${index++}">${line.split(' ')[1]}</h${i +
          1}>\n`
      }

      if (line.startsWith('>>>')) {
        const filePath = line.split(' ')[1]
        return `\n![image](./image-${filePath})\n`
      }
      return line
    })
    .join('\n')}`
}

const createNav = (
  headers: string[],
  nav: string[],
  index: number,
  prevIndent: number
) => {
  if (headers.length == index) {
    for (let i = 0; i < prevIndent; i++) {
      nav.push(`</li>`)
      nav.push(`</ol>`)
    }
    return
  }
  const splitted = headers[index].split(' ')
  const indent = splitted[0].length

  if (indent > prevIndent) {
    if (prevIndent > 0 && indent - prevIndent > 1) {
      throw new Error('Wrong format')
    }
    nav.push(`<ol class='top-ol-${indent}'>`)
    nav.push(`<li class='top-li-${indent}'>`)
    nav.push(`<a href='#h-${index}'>${splitted[1]}</a>`)
  } else if (indent == prevIndent) {
    nav.push(`</li>`)
    nav.push(`<li class='top-li-${indent}'>`)
    nav.push(`<a href='#h-${index}'>${splitted[1]}</a>`)
  } else {
    for (let i = 0; i < prevIndent - indent; i++) {
      nav.push(`</li>`)
      nav.push(`</ol>`)
    }
    nav.push(`</li>`)
    nav.push(`<li class='top-li-${indent}'>`)
    nav.push(`<a href='#h-${index}'>${splitted[1]}</a>`)
  }

  createNav(headers, nav, index + 1, indent)
}

export const compileMarkdown = (markdown: string, date: string) => {
  const md = markdown.split('\n')
  const title = md[0]
  const description = md[1]
  const topImage = md[2]

  let post = `---
title: ${title}
date: "${date}"
description: ${description}
`

  if (topImage !== '') {
    post = post + `featuredImage: ./image-${topImage}\n`
  }
  const texts = md.slice(3)

  post = post + `---\n`

  const firstHeaderIndex = texts.findIndex((text) => text.startsWith('#'))
  const targets = texts.slice(0, firstHeaderIndex)
  const lines = texts.slice(firstHeaderIndex)

  const headers = lines.filter((line) => line.startsWith('#'))
  const nav: string[] = []

  createNav(headers, nav, 0, -1)

  const result =
    post +
    `
${targets.join('\n')}

<nav class="blog-nav">
<div class="inner">
<p>Index</p>
${nav.join('\n')}
</div>
</nav>

<h2>About author</h2>

Having 15 years professional experience and still working as a software engineer.

${createLines(lines)}
`

  return result
}

const resizeImages = async (source: string, to: string) => {
  const files = fs.readdirSync(source)
  const images: string[] = files.filter((file: string) => !file.endsWith('.md'))

  const imagesMap = images.map(async (image) => {
    await sharp(`${source}${image}`)
      .resize(800)
      .toFile(`${to}image-${image}`, (err: any, info: any) => {
        if (err) {
          throw err
        }
      })
  })

  await Promise.all(imagesMap)
}

;(async () => {
  const distDir = `${__dirname}/dist/`
  const sourceDir = `${__dirname}/blog/`

  fs.rmdirSync(distDir, { recursive: true })
  fs.mkdirSync(distDir, { recursive: true })

  const buff = fs.readFileSync(`${sourceDir}index.md`, 'utf8')
  const result = compileMarkdown(
    buff,
    moment()
      .tz('Asia/Tokyo')
      .format()
  )
  fs.writeFileSync(`${distDir}index.md`, result)

  await resizeImages(sourceDir, distDir)
  console.log(result)
})()
