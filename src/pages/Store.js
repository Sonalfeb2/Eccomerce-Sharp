import GenricsCard from "../layout/Card";
import { Button } from "react-bootstrap";
const Store = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
    }
  ];
  return (
    <div>
      <h1 className="text-center">Music</h1>
      <div className="row">
        {productsArr.map((item, index) =>
          <div className="col-lg-6" key={index}>
            <GenricsCard
              title={item.title}
              id={index}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="secondary">See the Cart </Button>
      </div>
    </div>
  );
};
export default Store;
