import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center">An Error Occurred</h1>
      <h2 className="text-center">
        Couldn't Find MainPage- <Link to="/home">Click Here</Link>
      </h2>
      <Footer />
    </div>
  );
};
export default ErrorPage;
