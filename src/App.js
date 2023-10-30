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
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/",
          element: <Store />
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
