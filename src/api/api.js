export const getDummyProduct = (url) => {
  try {
    const res = axios.get(url);
    return res.response.data;
  } catch (error) {
    return error.response;
  }
};
