const OfferBadge = ({ product }) => {
  let text = "";
  let color = "";

  if (product) {
    if (product.newArrival) {
      text = "NEW ARRIVAL";
      color = "bg-pink-300";
    } else if (product.discount) {
      text = `${product?.discount}% OFF`;
      color = "bg-red-900";
    }
  } else {
    return;
  }

  return (
    <p
      className={`!absolute left-0 top-0 rounded-br-lg ${color} px-1.5 py-1 font-light text-white shadow-lg md:px-2 md:text-sm`}
    >
      {text}
    </p>
  );
};

export default OfferBadge;
