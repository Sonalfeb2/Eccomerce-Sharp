import { useEffect, useState } from "react";
import GenricsCard from "../layout/Card";
import { Button } from "react-bootstrap";
const Store = () => {
  const [product, setProduct] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(data => data.json())
      .then(data => {
        setProduct(data.products);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center">PRODUCTS</h1>
      <div className="row">
        {product.map((item, index) => {
          return (
            index < pageCount * 10 &&
            <div className="col-lg-6" key={item.id}>
              <GenricsCard
                title={item.title}
                id={item.id}
                price={item.price}
                imageUrl={item.thumbnail}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        {(pageCount + 1) * 10 <= product.length && pageCount*10 < product.length &&
          <Button
            variant="secondary"
            onClick={()=>{setPageCount(pageCount+1)}}
          >
            View More{" "}
          </Button>}
      </div>
    </div>
  );
};
export default Store;
