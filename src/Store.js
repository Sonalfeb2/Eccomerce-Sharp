import GenricsCard from "./layout/Card";
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
      <h1 className=" p-5 bg-secondary text-white text-center">
        Generics Store
      </h1>
      <h1 className="text-center">Music</h1>
      <div className="d-flex">
      {productsArr.map((item, id) =>
        <GenricsCard
          title={item.title}
          key={id}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      )}
      </div>
    </div>
  );
};
export default Store;
