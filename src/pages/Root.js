import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
