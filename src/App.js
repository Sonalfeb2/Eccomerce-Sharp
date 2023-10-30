// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import "./App.css";
import { CartContextProvider } from "./context_store/Cart_Context";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from "./pages/About";
import Store from "./pages/Store";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import './App.css';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage/>,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/",
          element: <Store />
        },
        {
          path: "/home",
          element: <Home />
        }
      ]
    }
  ]);
  return (
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  );
}

export default App;
