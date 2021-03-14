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
    <div className="flex w-1/4 mb-4 md:hidden">
      <FacebookShareButton
        url={url}
        className="w-full flex justify-start items-center focus:outline-none"
      >
        <FaFacebookF className=" text-gray-600 text-xl" />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        className="w-full flex justify-start items-center  focus:outline-none"
      >
        <FaTwitter className=" text-gray-600 text-xl" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="w-full flex justify-start items-center  focus:outline-none"
      >
        <FaLinkedinIn className="text-gray-600 text-xl" />
      </LinkedinShareButton>
    </div>
  )
}

export default Mobile
