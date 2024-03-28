import { twMerge } from "tailwind-merge";

const OfferBadge = ({ product }) => {
  let className = "!absolute left-0 top-0 rounded-br-lg px-1.5 py-1 font-light text-white shadow-lg md:px-2 md:text-sm";
  let text;
  if (product.newArrival) {
    className = twMerge(className, "bg-pink-300");
    text = "NEW";
  } else if (product.discount) {
    className = twMerge(className, "bg-red-900");
    text = `${product.discount}% OFF`;
  } else {
    return;
  }

  return <p className={className}>{text}</p>;
};

export default OfferBadge;
