import React, { useState, useEffect } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useLocation } from '@reach/router'

import axios from 'axios'

const Likes = () => {
  const [likes, setLikes] = useState<number | null>(null)
  const path = useLocation()
  const baseUrl = 'https://api.yas-ito.com/like'

  useEffect(() => {
    axios
      .get(`${baseUrl}?article=${path.pathname}`)
      .then((response) => setLikes(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        axios
          .post(baseUrl, { article: path.pathname })
          .then((response) => setLikes(response.data))
          .catch((err) => console.log(err))
      }
    >
      <AiFillLike className="text-gray-600 text-4xl" />
      {likes != null && (
        <p className="text-center text-xs text-gray-900">{likes}</p>
      )}
    </div>
  )
}

export default Likes
