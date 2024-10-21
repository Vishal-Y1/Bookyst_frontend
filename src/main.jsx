import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import router from "./routers/router.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen />
      </BrowserRouter> */}

      {/* <ReactQueryDevtools initialIsOpen /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
