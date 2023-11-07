import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
});
export const CartContextProvider = props => {
  const authCtx = useContext(AuthContext);
  const [itemState, setItemState] = useState([]);
  const getData = () => {
    fetch(`https://crudcrud.com/api/47aabb402f994ce1a102c6799a8b4084/cart`)
      .then(res => {
        if (!res.ok) {
          throw new Error("somethingwrong");
        }

        return res.json();
      })
      .then(data => {
        const filterdetail = data.filter(
          user => user.email === authCtx.useremail
        );
        setItemState(filterdetail);
      })
      .catch(err => setItemState([]));
  };
  useEffect(() => {
    getData();
  }, [authCtx.useremail]);

  const addItemHandler = async newItem => {
    const found = itemState.find(element => element.id === newItem.id);
    if (found) {
      const response = await fetch(
        `https://crudcrud.com/api/47aabb402f994ce1a102c6799a8b4084/cart/${found._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            id: found.id,
            title: found.title,
            imageUrl: found.imageUrl,
            price: found.price,
            email: found.email,
            quantity: found.quantity + 1
          })
        }
      );
      if (response) {
        getData();
      }
    } else {
      const response = await fetch(
        "https://crudcrud.com/api/47aabb402f994ce1a102c6799a8b4084/cart",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            id: newItem.id,
            quantity: 1,
            email: authCtx.useremail,
            ...newItem
          })
        }
      );
      const data = await response.json();
      if (data) {
        getData();
      }
    }
  };
  const removeItemHandler = id => {
    const removeData = itemState.filter(item => item.id !== id);
    setItemState(removeData);
  };
  const totalAmount = itemState.reduce((curr, item) => {
    return (curr = curr + item.price * item.quantity);
  }, 0);
  const contextValue = {
    items: itemState,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
