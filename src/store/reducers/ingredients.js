import * as actionTypes from "./actions";
const initailState = {
  ingredients: {
    Salad: 0,
    Bacon: 0,
    Meat: 0,
    Cheese: 0,
  },
  total: 4,
  orderedBy: "",
};
const price = {
  Salad: 0.2,
  Bacon: 1,
  Meat: 0.9,
  Cheese: 1,
};
const reducers = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.name]: state.ingredients[action.name] + 1,
        },
        total: state.total + price[action.name],
      };
    }
    case actionTypes.REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.name]: state.ingredients[action.name] - 1,
        },
        total: state.total - price[action.name],
      };
    }
    default:
      return state;
  }
};

export default reducers;
