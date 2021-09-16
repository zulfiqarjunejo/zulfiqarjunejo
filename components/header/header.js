import Link from "next/link";
import Head from "next/head";

import { firstName, lastName } from "../layout/layout";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className="bg-transparent fixed flex justify-between inset-x-0">
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                {firstName}
                <span className="font-bold">{lastName}</span>
              </a>
            </Link>
          </div>
          <div className={styles.menu}>
            <Link href="/blog">
              <a className="py-5 px-3">Blog</a>
            </Link>
            <a href="https://github.com/zulfiqarjunejo" className="py-5 px-3">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/zulfiqarjunejo/"
              className="py-5 px-3"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/zulfiqarjunejo/?hl=en"
              className="py-5 px-3"
            >
              Instagram
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
