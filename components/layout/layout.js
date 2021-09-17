import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

import Header from "../header/header";

export const firstName = "Zulfiqar";
export const lastName = "Ahmed";
export const siteTitle = "Zulfiqar Ahmed";

export default function Layout({ children, home }) {
  return (
    <div className={styles.appLayout}>
      <div className="container mx-auto">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Header></Header>
        <section className={styles.content}>{children}</section>

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
