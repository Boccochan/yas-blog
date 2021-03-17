import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Likes from '@/components/Sns/Likes'

interface Props {
  title: string
  url: string
}

const Laptop = ({ title, url }: Props) => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8">
        <Likes />
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
