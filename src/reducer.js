export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // where is type action coming in for action.Looks like action is nothing but dispatch
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //original state
        basket: [...state.basket, action.item], //current state of basket and whatever the action that we want
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(" action.id is:", action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("get out of here.");
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
