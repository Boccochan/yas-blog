import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

interface Props {
  title: string
  url: string
}

const Laptop = ({ title, url }: Props) => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8">
        <div>
          <AiFillLike className="text-gray-600 text-4xl" />
          <p className="text-center text-xs text-gray-900">352</p>
        </div>
      </div>

      <FacebookShareButton
        url={url}
        className="w-full flex justify-center items-center mb-8 focus:outline-none"
      >
        <FaFacebookF className=" text-gray-600 text-lg" />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        className="w-full flex justify-center items-center mb-8 focus:outline-none"
      >
        <FaTwitter className=" text-gray-600 text-lg" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="w-full flex justify-center items-center mb-8 focus:outline-none"
      >
        <FaLinkedinIn className="text-gray-600 text-lg" />
      </LinkedinShareButton>
    </>
  )
}

export default Laptop
