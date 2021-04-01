import Head from "next/head";
import styles from "../styles/Home.module.css";
import "node-fetch";
import { useState, useEffect } from "react";

export default function Home(defaults) {
  const [fact, setFact] = useState(defaults.defaults.fact);
  const [factNum, setFactNum] = useState(defaults.defaults.num);
  const [pageURL, setPageURL] = useState(0);

  const generateFact = async (domain=pageURL) => {
    console.log(domain);
    const res = await fetch(`${domain}api/fact`);
    const resJ = await res.json();
    setFact(resJ.result);
    setFactNum(resJ.number);
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
          Easter factorigator{" "}
          <img className={styles.logo} src="easter-bunny.svg" />
        </h1>

        <p className={styles.description}>
          Generate a new fact by hitting the refresh icon.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Random fact #{factNum}</h3>
            <p>{fact}</p>
            <img
              onClick={() => generateFact()}
              className={styles.refresh}
              src="refresh.svg"
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">Home</a>&nbsp; • &nbsp;<a href="/legal">Legal</a>
      </footer>
    </div>
  );
}

export async function getStaticProps({}) {
  const defaults = {
    fact: "There are a lot of facts about easter 🐣",
    num: 1
  };

  return {
    props: { defaults }, // will be passed to the page component as props
  }
}
