import React from 'react';
import { GetServerSideProps } from 'next';
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

import Layout from "../components/layout/layout";
import { getAll } from "../services/blog.service";
import styles from "../styles/blog.module.scss";
import { getStrapiMedia } from "../lib/media";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const all = await getAll();

  if (!all) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      all: all,
    },
  };
};

interface IBlogProps {
  all: any[];
}

const Blog: React.FC<any> = ({ all }) => {
  return (
    <Layout>
      {all.map((article: any) => (
        <section className={styles.blog__entry} key={article.id}>
          <div className={styles.blog__image}>
            <Link href={`blog/${article.slug}`}>
              <Image
                src={getStrapiMedia(article.image)}
                width={400}
                height={400}
              ></Image>
            </Link>
          </div>
          <div className={styles.blog__info}>
            <Link href={`blog/${article.slug}`}>
              <h2>{article.title}</h2>
            </Link>
            <div className={styles.blog__experience}>
              <p className={styles.blog__date}>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
              <p>{article.slug}</p>
            </div>
            <p>{article.description}</p>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Blog;
