import { BUY_PIZZA } from "./pizzaTypes";

export const buyPizza = () => {
  console.log("inside pizzaAction");
  return {
    type: BUY_PIZZA,
  };
};
