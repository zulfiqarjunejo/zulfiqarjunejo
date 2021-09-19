import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

import Layout from "../components/layout/layout";
import { getAll } from "../services/blog.service";
import styles from "./blog.module.scss";
import { getStrapiMedia } from "../lib/media";

export async function getServerSideProps(context) {
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
}

const Blog = ({ all }) => {
  return (
    <Layout>
      {all.map((article) => (
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
