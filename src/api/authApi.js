import axios from "axios";

const authApi = axios.create({
  // baseURL: "http://localhost:3344/api/auth",
  baseURL: "https://bookyst-backend-l6ij.vercel.app/api/auth",
  withCredentials: true,
});

export const signIn = async (user) => {
  const response = await authApi.post("/signin", user);
  return response.data;
};

export const signUp = async (user) => {
  const response = await authApi.post("/signup", user);
  return response.data;
};

// export const deleteUser = async ({ id }) => {
//   return await booksApi.delete(`/books/delete/${id}`, id);
// };

const updateUser = async (user) => {
  return await booksApi.put();
};
