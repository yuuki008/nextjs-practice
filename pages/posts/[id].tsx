import React from 'react'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

type Props = {
  post: PostType
}

const Post = (props: Props) => {
  return (
    <Layout title={props.post.title}>
      <>
        <p className="text-red-500">{props.post.title}</p>
        <p>{props.post.body}</p>
      </>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: { id: number }
}

export const getStaticProps = async (params : Params) => {
  const post = await getPostData(params.params.id)

  return {
    props: { post: post }
  }
}

