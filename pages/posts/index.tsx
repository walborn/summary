import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Layout } from 'components/Layout'
import { TimeStamp } from 'components/TimeStamp'
import { getSortedPostsData } from 'library/posts'

import styles from './index.module.scss'

type Post = {
  date: string
  title: string
  id: string
}

interface Props {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => (
  <Layout title="Posts">
    <h1 className={styles.headingLg}>Статьи</h1>
    <ul className={styles.list}>
      {posts.map(({ id, date, title }) => (
        <li className={styles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={styles.lightText}>
            <TimeStamp value={date} />
          </small>
        </li>
      ))}
    </ul>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => ({
  props: { posts: getSortedPostsData() }
})

export default Posts
