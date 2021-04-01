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
        <h1 className={styles.notSoBig}>
          The legal section where noone should look
        </h1>
        <p className={styles.description}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </main>

      <footer className={styles.footer}>
          <a href="/">Home</a>&nbsp; • &nbsp;<a href="/legal">Legal</a>
      </footer>
    </div>
  )
}
