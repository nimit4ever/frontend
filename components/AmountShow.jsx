const AmountShow = ({ children, className, withDiscount = false, discount = 0 }) => {
  let amount = Number(children);
  const disc = Number(discount);
  if (withDiscount && disc > 0) {
    amount = Math.round((amount * (100 - disc)) / 100);
  }
  return <div className={className}>&#8377;{amount}</div>;
};

export default AmountShow;
