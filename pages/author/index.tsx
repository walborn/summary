import { GetStaticProps } from 'next'
import { formatDistanceStrict } from 'date-fns'
import ru from 'date-fns/locale/ru'
import cn from 'classnames'

import { Layout } from 'components/Layout'
import * as Icons from 'components/icons'
import { TimeStamp } from 'components/TimeStamp'
import { Avatar } from 'components/Avatar'
import avatar from 'public/images/avatar.png'
import { getSortedPostsData } from 'library/posts'

import styles from './index.module.scss'

interface Props {
  posts: {
    date: string
    title: string
    id: string
  }[]
}
export default function Home({ posts }: Props) {
  const age = formatDistanceStrict(new Date(1986, 9, 29), new Date(), { unit: 'year', locale: ru })

  return (
    <Layout title="Boris Yuzhakov">
      <section>
        <div className={styles.avatar}><Avatar value={avatar} size={128} /></div>
        <h2>Обо мне</h2>
        <p>
          Всем привет! Расскажу немного о себе. Мне {age}, родился 29 октября 1986 году.
          Окончил МФТИ, но вместо большой науки пошел во фронтенд.
          Однако так и осталась большая любовь к алгоритмам и преподаванию.
        </p>
        <h2>Контакты</h2>
        <ul className={styles.contacts}>
          <li className={styles.contact}>
            <a href="tg://resolve?domain=codebor" target="_blank" rel="noreferrer">
              <Icons.Telegram className={cn(styles.icon, styles.telegram)} />
              @codebor
            </a>
          </li>
          <li className={styles.contact}>
            <a href="https://github.com/walborn">
              <Icons.Github className={cn(styles.icon, styles.github)} /> 
              @walborn
            </a>
          </li>
          <li className={styles.contact}>
            <a href="https://yandex.ru/maps/-/CCUyI4B6kC" target="_blank" rel="noreferrer">
              <Icons.Place className={cn(styles.icon, styles.place)} /> 
              Москва, Тимирязевский район
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Навыки и умения</h2>
        <Icons.JavaScript />
        <Icons.Python />
        <Icons.ReactJS />
        <Icons.Github className={styles.skill}/>
      </section>
      <section>
      <ul>
        <h2>Опыт работы</h2>
        <li>
          <h3><a href="https://sibur.digital/">СИБУР Диджитал</a></h3>
          <small className={styles.lightText}>
            <TimeStamp value="2020-08-29" /> — по настоящее время ({ formatDistanceStrict(new Date(2020, 8, 29), new Date(), { unit: 'month', locale: ru }) })
          </small>
          <br />
          <small>
            <a href="https://yandex.ru/maps/-/CCUyI4Rb3D" target="_blank" rel="noreferrer">
              Москва, ул. Кржижановского, 14, корп. 3
            </a>
          </small> 
      
          <h4>Старший разработчик</h4>
          Поддержка проектов машинного обучения и динамического ценообразования
        </li>
        <li>
          <h3>Cloud Link</h3>
          <small className={styles.lightText}>
            <TimeStamp value="2016-05-30" /> — <TimeStamp value="2020-08-27" /> ({
              formatDistanceStrict(new Date(2016, 5, 30), new Date(2020, 8, 27), { unit: 'year', locale: ru }) })
          </small>
          <br />
          <small>
            <a href="https://yandex.ru/maps/-/CCUyI4fH9A" target="_blank" rel="noreferrer">
              Москва, ул. Докукина 8с2
            </a>
          </small> 
      
          <h4>Тимлид команды фронтенд-разработки</h4>
          <ol>
            <li>Управление командой, состоящей из четырех человек</li>
            <li>Разработка фронтенда приложений:</li>
            <ul>
              <li>таргетированная рассылка сообщений (email, sms, web)</li>
              <li>различного рода лендинги</li>
              <li>создание и просмотр шаблонов html-блоков</li>
            </ul>
            <li>Обучение команды разработки</li>
            <li>Чтение курса по алгоритмам</li>
          </ol>
        </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.headingLg}>Образование</h2>
        <div>
          МФТИ: 2005 - 2011 
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { posts: getSortedPostsData() }
})