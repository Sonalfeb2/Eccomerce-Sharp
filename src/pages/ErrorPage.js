import Footer from "../layout/Footer";
import Header from "../layout/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center">An Error Occurred</h1>
      <h2 className="text-center">Couldn't Find MainPage</h2>
      <Footer />
    </div>
  );
};
export default ErrorPage;
