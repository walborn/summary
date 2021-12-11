import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import { formatDistanceStrict } from 'date-fns'
import ru from 'date-fns/locale/ru'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { TimeStamp } from '../components/TimeStamp'
import { Telegram } from '../components/Telegram'
import { Place } from '../components/Place'

interface Props {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}
export default function Home({ allPostsData }: Props) {
  const age = formatDistanceStrict(new Date(1986, 9, 29), new Date(), { unit: 'year', locale: ru })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Мне {age}, родился 29 октября 1986</p>
        <p className="contact">
          <Telegram className="icon telegram" /> 
          <a href="tg://resolve?domain=codebor" target="_blank" rel="noreferrer">@codebor</a>
        </p>
        <p className="contact">
          <Place className="icon place" /> 
          <a href="https://yandex.ru/maps/-/CCUyI4B6kC" target="_blank" rel="noreferrer">
            Москва, Тимирязевский район
          </a>
        </p>
      </section>
      <section>
      <ul className={utilStyles.list}>
        <h2 className={utilStyles.headingLg}>Опыт работы</h2>
        <li>
          <h3><a href="https://sibur.digital/">СИБУР Диджитал</a></h3>
          <small className={utilStyles.lightText}>
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
          <small className={utilStyles.lightText}>
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
        <h2 className={utilStyles.headingLg}>Образование</h2>
        <div>
          МФТИ: 2005 - 2011 
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Статьи</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <TimeStamp value={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
     
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}