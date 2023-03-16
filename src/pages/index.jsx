import Head from 'next/head'
import { useCallback } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'
import styles from '../styles/Home.module.css'


export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(123);
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>
        ボタン
      </button>
      <Main title="Index Page" page="index"/>
      <Footer />
    </div>
  )
}
