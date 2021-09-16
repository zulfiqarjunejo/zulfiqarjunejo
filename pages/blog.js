import Image from "next/image";

import Layout from "../components/layout/layout";
import { getAll } from "../services/blog.service";

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
      <h1>This is my blog</h1>
      {allExperiences.map((experience) => (
        <section key={experience.id}>
          Id: {experience.id} Title: {experience.Title} Description:{" "}
          {experience.Description} Date: {experience.Date} Restaurant Name:{" "}
          {experience.restaurant.Name}
          {experience.Gallery.map((photo) => (
            <Image
              key={photo.id}
              src={
                "https://zulfiqarjunejo-strapi-backend.herokuapp.com" +
                photo.formats.medium.url
              }
              width={400}
              height={400}
            ></Image>
          ))}
        </section>
      ))}
    </Layout>
  );
};

export default Blog;
