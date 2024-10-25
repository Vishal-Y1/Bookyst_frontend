import axios from "axios";
import app from "../firebase";
import { deleteObject, getStorage, ref } from "firebase/storage";

const storage = getStorage(app);

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

export const deleteBook = async (book) => {
  const deleteFunc = await booksApi.delete(`/delete/${book._id}`, book._id);
  if (deleteFunc) {
    deleteObject(ref(storage, book.image));
    console.log("book image deleted");
  }
  return deleteFunc;
};
// export const deleteBook = async ({ id }) => {
//   return await booksApi.delete(`/delete/${id}`, id);
// };

export const updateBook = async (book) => {
  return await booksApi.put(`/update/${book._id}`);
};

export default booksApi;
