import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'node-fetch';
import { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";

export default function Home(defaults) {
  const [fact, setFact] = useState(defaults.defaults.fact);
  const [factNum, setFactNum] = useState(defaults.defaults.num);
  const [pageURL, setPageURL] = useState(0);
  const [translated, setTranslated] = useState('');
  const [loading, setLoading] = useState(false);

  const generateFact = async (domain = pageURL) => {
    setLoading(true);
    const res = await fetch(`${domain}api/fact`);
    const resJ = await res.json();
    setFact(resJ.result);
    setFactNum(resJ.number);
    setTranslated('');
    setLoading(false);
  };

  const translateFact = async (domain = pageURL) => {
    setLoading(true);
    const res = await fetch(`${domain}api/translate?string=${fact}`);
    const resJ = await res.json();
    setTranslated(resJ[0].translations[0].text);
    setLoading(false);
  };

  useEffect(() => {
    setPageURL(window.location.href);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Easter facts at your service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Easter factorigator{' '}
          <img className={styles.logo} src="easter-bunny.svg" />
        </h1>

        <p className={styles.description}>
          Generate a new fact by hitting the refresh icon.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Random fact #{factNum}</h3>
            <p style={{ marginBottom: '50px' }}>
              {translated ? translated : fact}
            </p>
            <div className={styles.settings}>
              <Button
                color="inerhit"
                variant="contained"
                disabled={translated ? true : loading}
                onClick={() => translateFact()}
              >
                Translate 🌐
              </Button>
              <p
                onClick={() => generateFact()}
                style={{display: loading ? 'none' : 'block'}}
                className={styles.refresh}
                src="refresh.svg"
              >
                <svg
                  data-darkreader-inline-fill=""
                  data-darkreader-inline-stroke=""
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">Home</a>&nbsp; • &nbsp;<a href="/legal">Legal</a>
      </footer>
    </div>
  )
}

export async function getStaticProps({}) {
  const defaults = {
    fact: 'There are many many facts about easter on this page, have fun! 🐣',
    num: 1,
  }

  return {
    props: { defaults }, // will be passed to the page component as props
  }
}
