import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description} style={{color: 'blue'}}>
        Hej!??!!!
      </div>
      <div>Då!!!</div>
    </main>
  )
}
