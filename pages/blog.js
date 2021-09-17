import Image from "next/image";
import Link from "next/link";

import Layout from "../components/layout/layout";
import { getAll } from "../services/blog.service";
import styles from "./blog.module.scss";

export async function getServerSideProps(context) {
  const allExperiences = await getAll();

  if (!allExperiences) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allExperiences,
    },
  };
}

const Blog = ({ allExperiences }) => {
  return (
    <Layout>
      {allExperiences.map((experience) => (
        <section className={styles.blog__entry} key={experience.id}>
          <div className={styles.blog__image}>
            <Link href="/blog/1">
              <Image
                src={"/images/outside_blog_post.jpeg"}
                width={400}
                height={400}
              ></Image>
            </Link>
          </div>
          <div className={styles.blog__info}>
            <Link href="/blog/1">
              <h2>It’s Latin — Sorta</h2>
            </Link>
            <div className={styles.blog__experience}>
              <p className={styles.blog__date}>24.10.1993</p>
              <p className={styles.blog__place}>{experience.restaurant.Name}</p>
            </div>
            <p>
              One thing that no one questions is that Lerem Ipsum is based upon
              Latin. What’s more, that Latin dates back to 45 BCE in Cicero’s
              first book of De...
            </p>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Blog;
