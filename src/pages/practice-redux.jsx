import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Counter from '../components/counter/counter'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'
import styles from '../styles/Home.module.css'

const PracticeRedux = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>redux</title>
      </Head>
      <Header />
      <Counter />
      <Main title="Redux Page" page="practice-redux"/>
      <Footer />
    </div>
  )
}

export default PracticeRedux
