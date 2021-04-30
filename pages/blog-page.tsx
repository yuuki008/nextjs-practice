import React from 'react'
import Layout from '../components/Layout'
import { getAllPostData } from '../lib/posts'
import { PostCard } from '../components/PostCard';


type Props = {
  posts: PostType[]
}

const Blog = ({ posts }: Props) => {
  return (
    <Layout title={"Blog"}>
      <div>
        <div className="blogs-wrapper">
          {posts.map((post) =>
            <PostCard post={post} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const getStaticProps = async () => {
  const posts = await getAllPostData()
  return { props: { posts }}
}