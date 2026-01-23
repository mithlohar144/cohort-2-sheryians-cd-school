import axios from "axios";
export const Getdata = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const GetSelecteddata = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
