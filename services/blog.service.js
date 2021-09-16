const axios = require("axios");

const getAll = async () => {
  try {
    const experiences = await axios.get(
      "https://zulfiqarjunejo-strapi-backend.herokuapp.com/experiences"
    );
    return experiences.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAll };
