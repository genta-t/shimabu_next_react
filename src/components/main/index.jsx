import { useEffect } from 'react'
import { Headline } from '../headline'
import { Links } from '../links'
import styles from './Main.module.css'

export function Main(props) {
  useEffect(() => {
    // document.body.style.backgroundColor = "lightblue" <-やってはいけない
    return () => {
      // document.body.style.backgroundColor = ""　<-やってはいけない
    }
  }, [])

  return (
    <main className={styles.main}>
      <Headline
        title={props.title}
        page={props.page}
      >
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  )
}
