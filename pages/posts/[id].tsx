import { GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from 'components/Layout'
import { getAllPostIds, getPostData } from 'library/posts'
import { TimeStamp } from 'components/TimeStamp'


interface Props {
  post: {
    title: string
    date: string
    contentHtml: string
  }
}

export default function Post({ post }: Props) {
  return (
    <Layout title={post.title}>
      <article>
        <h1>{post.title}</h1>
        <div>
          <TimeStamp value={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    post: await getPostData(params.id as string)
  }
})