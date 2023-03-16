import { Headline } from '../components/headline'
import { Links } from '../components/links'
import styles from './Main.module.css'

export function Main(props) {
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
