import React from 'react'

import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

const Github = () => (
  <a href="https://github.com/Boccochan" className="flex items-center">
    <FaGithub size="18px" />
    <p className="pl-2 text-xs">Boccochan</p>
  </a>
)

const Twitter = () => (
  <a href="https://twitter.com/yasuhiro_it" className="flex items-center">
    <FaTwitter size="18px" />
    <p className="pl-2 text-xs">@yasuhiro_it</p>
  </a>
)

const Email = () => (
  <a
    href="mailto:yasuhiro0312q@gmail.com?subject=件名"
    className="flex items-center"
  >
    <FaEnvelope size="18px" />
    <p className="pl-2 text-xs">yasuhiro0312q@gmail.com</p>
  </a>
)

const Share = () => {
  return (
    <>
      <div className="mb-2">
        <Email />
      </div>
      <div className="mb-2">
        <Github />
      </div>
      <div className="mb-2">
        <Twitter />
      </div>
    </>
  )
}

export default Share
