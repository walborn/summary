import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import Headroom from 'react-headroom'

import { Avatar } from 'components/Avatar'
import avatar from 'public/images/avatar.png'

import styles from './index.module.scss'

const Name = ({ children }) => <div style={{ textAlign: 'right' }}>{children}</div>

export const Nav: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Headroom>
      <nav className={styles.root}>
        <div className={styles.header}>
          <Link href="/author">
            <a
              className={cn(styles.link, {
                [styles.selected]: pathname === '/author',
              })}
            >
              Author
            </a>
          </Link>
          <Link href="/posts">
            <a
              className={cn(styles.link, {
                [styles.selected]: pathname === '/posts',
              })}
            >
              Posts
            </a>
          </Link>
          <Name>Boris Yuzhakov</Name>
          <Avatar value={avatar} size={40}/>
        </div>
      </nav>
    </Headroom>
  )
}
