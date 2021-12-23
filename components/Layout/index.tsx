import React from 'react'
import { Head } from 'components/Head'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'

import styles from './index.module.scss'

interface Props {
  title: string
}

export const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Head title={title}/>
    <Nav />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)
