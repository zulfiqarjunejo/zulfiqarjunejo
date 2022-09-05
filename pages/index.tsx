import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section></section>
    </Layout>
  );
}
