import Head from 'next/head'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main title="About Page" page="about"/>

      <Footer />
    </div>
  )
}
