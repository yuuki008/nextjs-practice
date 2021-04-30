import fetch from 'node-fetch'

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostData = async () => {
  const res = await fetch(new URL(API_URL))
  const posts = await res.json()
  return posts
}

export const getAllPostIds = async () => {
  const res = await fetch(new URL(API_URL))
  const posts = await res.json()
  return posts.map((post:PostType) => ({
    params: { id: String(post.id) }
  }))
}

export const getPostData = async (id: number) => {
  const res = await fetch(new URL(`${API_URL}/${id}/`))
  const post = await res.json()
  return post
}

