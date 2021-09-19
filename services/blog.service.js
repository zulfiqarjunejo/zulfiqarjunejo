import { fetchAPI } from "../lib/api";

const getAll = async () => {
  try {
    const all = fetchAPI("/articles");
    return all;
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (slug) => {
  try {
    const one = fetchAPI(`/articles/${slug}`);
    return one;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, getOne };
