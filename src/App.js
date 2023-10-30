import Header from "./layout/Header";
import Store from "./Store";
import Footer from "./layout/Footer";
import "./App.css";
import {CartContextProvider} from "./context_store/Cart_Context";
function App() {

  return (
    <CartContextProvider>
    <Header/>
    <Store />
    <Footer/></CartContextProvider>
  );
}

export default App;
