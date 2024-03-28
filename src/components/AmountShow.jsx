import { createElement } from "react";

const AmountShow = ({ children, className, withDiscount = false, discount = 0, variant = "p" }) => {
  let amount = Number(children);
  const disc = Number(discount);
  if (withDiscount && disc > 0) {
    amount = Math.round((amount * (100 - disc)) / 100);
  }

  return createElement(variant, { className: className }, `₹${amount}`);
};

export default AmountShow;
