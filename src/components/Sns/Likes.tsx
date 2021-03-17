import React, { useState, useEffect } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useLocation } from '@reach/router'

import axios from 'axios'

const Likes = () => {
  const [likes, setLikes] = useState<number | null>(null)
  const [likeStyle, setLikeStyle] = useState('text-gray-600 text-4xl')
  const path = useLocation()
  const baseUrl = 'https://api.yas-ito.com/like'

  useEffect(() => {
    const res = localStorage.getItem(`like${path.pathname}`)
    if (res != null) {
      setLikeStyle('text-blue-500 text-4xl')
    }

    axios
      .get(`${baseUrl}?article=${path.pathname}`)
      .then((response) => setLikes(response.data))
      .catch((err) => console.log(err))
  }, [])

  const like = () => {
    const res = localStorage.getItem(`like${path.pathname}`)
    if (res == null) {
      if (likes != null) {
        // Since waiting response from a server is a bit slow
        setLikeStyle('text-blue-500 text-4xl')
        setLikes(likes + 1)
      }

      axios
        .post(baseUrl, { article: path.pathname })
        .then((response) => {
          localStorage.setItem(`like${path.pathname}`, 'like')
          setLikeStyle('text-blue-500 text-4xl')
          setLikes(response.data)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="cursor-pointer " onClick={like}>
      <AiFillLike className={likeStyle} />
      {likes != null && (
        <p className="text-center text-xs text-gray-900">{likes}</p>
      )}
    </div>
  )
}

export default Likes
