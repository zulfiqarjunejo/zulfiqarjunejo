import React from 'react';
import Image from "next/image";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/layout/layout";
import styles from "./[id].module.scss";
import { getOne } from "../../services/blog.service";
import { getStrapiMedia } from "../../lib/media";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const one = await getOne(context.query.id);

  if (!one) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      one,
    },
  };
};

interface IBlog {
  one: any;
}

const Blog: React.FC<any> = ({ one }) => {
  return (
    <Layout>
      <div className={styles.singleBlog}>
        <h1>{one.title}</h1>
        <div className={styles.blog__experience}>
          <p>
            <Moment format="MMM Do YYYY">{one.published_at}</Moment>
          </p>
        </div>
        <div className={styles.singleHeaderimage}>
          <Image
            src={getStrapiMedia(one.image)}
            width={400}
            height={400}
          ></Image>
        </div>
        <div className={styles.singleIngfo}>
          <p> {one.description} </p>
          <ReactMarkdown>
            {one.content}
          </ReactMarkdown>
        </div>

        {/* <div className={styles.gallery}>
          <Image
            src={"/images/rional_messi.jpg"}
            width={400}
            height={400}
          ></Image>
        </div> */}
      </div>
    </Layout>
  );
};

export default Blog;
