// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import "./App.css";
import { CartContextProvider } from "./context_store/Cart_Context";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { About } from "./pages/About";
import Store from "./pages/Store";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";
import ContactUS from "./pages/ContactUs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/",
          element: <Navigate to="/store" replace />
        },
        {
          path: "/store",
          element: <Store />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/contact",
          element: <ContactUS />
        },
        {
          path: "/product-detail/:id",
          element: <ProductDetailPage />
        }
      ]
    }
  ]);
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
