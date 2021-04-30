import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Router from 'next/router'

type Props = {
  post: PostType
}

export const PostCard = ({ post }: Props) => {
  var url = 'https://dog.ceo/api/breeds/image/random';
  const [image, setImage] = useState('')

  const handleImage = async () => {
    const res = await fetch(url)
    const json:any = await res.json()
    setImage(json.message)
  }

  useEffect(() => {
    handleImage()
  }, [])


  return (
    <div className="blog-wrapper" key="post.id">
    <img className="blog-image" src={image} />
    <div className="blog-content" onClick={() => Router.push('/posts/' + post.id)}>
      <p className="blog-title">{post.title}</p>
      <p className="blog-description">{post.body}</p>
    </div>
    <div className="blog-user">
      <div
        className="blog-user-icon"
        onClick={() => {
          alert('ユーザー情報今はないです！')
        }}
      >
        <AccountCircleIcon color="disabled" style={{ fontSize: '30px' }}/>
      </div>
      <p className='blog-user-name'>user{post.userId}</p>
      </div>
  </div>
  )
}
