import axios from "axios";

const booksApi = axios.create({
  baseURL: "https://bookyst-backend-l6ij.vercel.app/api/books",
  withCredentials: true,
});

export const getAllBooks = async () => {
  const response = await booksApi.get();
  return response.data;
};

export const getBook = async (id) => {
  const response = await booksApi.get(`/find/${id}`);
  return response.data;
};
export const addBook = async (book) => {
  const response = await booksApi.post("/add", book);
  return response.data;
};

export const search = async (q) => {
  const response = await booksApi.get(`/search?q=${q}`);
  return response.data;
};

export default booksApi;
