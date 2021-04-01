import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Easter facts at your service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Easter factorigator 
        </h1>

        <p className={styles.description}>
          Generate a new fact by hitting the refresh icon.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Random fact #{Math.floor(Math.random() * 500)}</h3>
            <p>This is a poggers moment.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">Home</a>&nbsp; • &nbsp;<a href="/legal">Legal</a>
      </footer>
    </div>
  )
}
