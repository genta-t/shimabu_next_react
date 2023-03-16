import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  return (
      <header className={styles.header}>
        <Link href='/'>
          <p>Index</p>
        </Link>
        <Link href='/about'>
          <p>About</p>
        </Link>
      </header>
  )
}
