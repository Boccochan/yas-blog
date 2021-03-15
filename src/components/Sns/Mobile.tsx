import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

interface Props {
  title: string
  url: string
}

const Mobile = ({ title, url }: Props) => {
  return (
    <div className="flex mb-4 md:hidden">
      <FacebookShareButton
        url={url}
        className="flex justify-start items-center mr-10 focus:outline-none"
      >
        <FaFacebookF className=" text-gray-600 text-3xl" />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        className="flex justify-start items-center mr-10 focus:outline-none"
      >
        <FaTwitter className=" text-gray-600 text-3xl" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="flex justify-start items-center mr-10 focus:outline-none"
      >
        <FaLinkedinIn className="text-gray-600 text-3xl" />
      </LinkedinShareButton>
    </div>
  )
}

export default Mobile
