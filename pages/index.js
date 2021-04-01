import Head from "next/head";
import styles from "../styles/Home.module.css";
import "node-fetch";
import { useState } from "react";

export default function Home() {

  const generateFact = async () => {
    const res = await fetch("http://localhost:3000/api/fact");
    const resJ = await res.json();
    setFact(resJ.result);
    setFactNum(resJ.number);
    //return "An estimated $14.7 billion is spent in total for Easter in the US.";
  };

  const [fact, setFact] = useState("");
  const [factNum, setFactNum] = useState(69);

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
