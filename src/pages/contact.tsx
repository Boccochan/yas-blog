import React, { useEffect, useState } from 'react'
import SEO from '@/components/Seo'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import BlogMenu from '@/components/Blog/Menu'

const getElements = () => {
  let i = 0
  const els: HTMLElement[] = []
  while (true) {
    const el = document.getElementById(`h-${i++}`)
    if (el != null) {
      els.push(el)
    } else {
      break
    }
  }

  return els
}

const ContactPage = () => {
  const [els, setEls] = useState<HTMLElement[]>([])
  const [paragraph, setParagraph] = useState(0)

  function traceScroll() {
    const result = els.filter(
      (el) => el != null && el.getBoundingClientRect().top <= 0
    )

    if (result.length === 0) {
      setParagraph(0)
    } else {
      const ele = result[result.length - 1]
      setParagraph(result.length - 1)
    }
  }

  useEffect(() => {
    if (els.length === 0) {
      setEls(getElements())
    }
    function watchScroll() {
      window.addEventListener('scroll', traceScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', traceScroll)
    }
  })

  return (
    <>
      <Header siteTitle={'Yasuhiro Ito'} />
      <div className="flex min-h-screen flex-grow mx-auto max-w-6xl">
        <div className="hidden md:block h-full bg-blue-300 w-20">
          <div className="sticky top-0">Sticky Heading 1</div>
        </div>
        <div className="h-full bg-white">
          <h1 id="h-0" className="py-4">
            se sticky to position an element
          </h1>
          <h2 id="h-1" className="py-4">
            se sticky to position an element
          </h2>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
          <p className="py-4">
            se sticky to position an element as relative until it crosses a
            specified threshold, then treat it as fixed until its parent is off
            screen. Offsets are calculated relative to the element's normal
            position and the element will act as a position reference for
            absolutely positioned children.
          </p>
        </div>
        <div className="hidden md:block h-full bg-gray-300 w-7/12">
          <BlogMenu els={els} focus={paragraph} />
        </div>
      </div>
    </>
  )
}
// <Layout>
//   <SEO title="Contact" />
//   <h1 className="text-3xl">This is contact</h1>
// </Layout>

export default ContactPage
