// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import "./App.css";
import { CartContextProvider } from "./context_store/Cart_Context";
import Profile from "./pages/UpdateProfile";
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
import AuthForm from "./Auth/AuthForm";
import AuthContext from "./context_store/AuthContext";
import { useContext } from "react";
function App() {
  const authCtx = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/",
          element: authCtx.userLoggedIn ? <Navigate to="/store" replace />:<Navigate to="/user-auth"  />
        },
        {
          path: "/store",
          element:authCtx.userLoggedIn ?  <Store /> :<Navigate to="/user-auth"  />
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
        },
        {
          path: "/user-auth",
          element: <AuthForm />
        },
        {
          path: "/change-password",
          element: authCtx.userLoggedIn
            ? <Profile />
            : <Navigate to="/user-auth" />
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
