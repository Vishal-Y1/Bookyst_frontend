import axios from "axios";

const booksApi = axios.create({
  // baseURL: "http://localhost:3344/api/books",
  baseURL: "/api/books",
});

export const getAllBooks = async () => {
  const response = await booksApi.get();
  return response.data;
};

export const getBook = async (id) => {
  const response = await booksApi.get(`/find/${id}`);
  return response.data;
};
// export const addBook = async (book) => {
//   return await booksApi.post("/add", book);
// };

export const search = async (q) => {
  const response = await booksApi.get(`/search?q=${q}`);
  return response.data;
};

export default booksApi;
