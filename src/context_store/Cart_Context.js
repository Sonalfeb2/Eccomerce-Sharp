import React, { useState } from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
});
export const CartContextProvider = props => {
    const [itemState, setItemState] = useState([]);
    const addItemHandler = newItem => {
      const found = itemState.find(element => element.id === newItem.id);
      if (found) {
        const prevState = [...itemState];
        found.quantity++;
        setItemState(prevState);
      } else {
        setItemState(item => [...item, { id: newItem.id,quantity:1, ...newItem }]);
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
    console.log(itemState, totalAmount);
    return (
      <CartContext.Provider value={contextValue}>
        {props.children}
      </CartContext.Provider>
    );
  };
export default CartContext;