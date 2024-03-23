import { Card, CardBody, CardHeader, Chip } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { MetaData, Loader, StarRating, ToastMassage, AmountShow } from "../../../components/index.js";
import { useGetProductsQuery } from "../../../redux/api/productsApi.js";
import { useEffect } from "react";

const ProductList = () => {
  const { data, isLoading, error, isError } = useGetProductsQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) ToastMassage.error(error?.message || "Something wrong");
  }, [isError]);
  const products = data || [];
  return (
    <>
      <MetaData title="Best Shop" />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="lg:text-md m-1 grid grid-cols-2 items-stretch gap-1 text-sm lg:grid-cols-3 2xl:grid-cols-4">
          {products.map((product, index) => (
            <Card
              key={index}
              className="h-auto w-full max-w-sm rounded-none shadow duration-300 hover:shadow-lg"
              onClick={() => {
                navigate(`/products/${product?._id}`);
              }}
            >
              <CardHeader className="m-0 h-full max-h-[360px] w-full max-w-full rounded-none object-cover object-center shadow-none md:max-h-[480px]">
                <img src={product?.image} alt={product?.title} className="object-cover" />
                {product?.discount && (
                  <span className="!absolute left-0 top-0 rounded-br-lg bg-red-800 p-1 text-xs font-light text-white shadow-lg md:p-1.5">
                    {`${product?.discount}% OFF`}
                  </span>
                )}
                {product?.newArrival && (
                  <span className="!absolute left-0 top-0 rounded-br-lg bg-pink-300 p-1 text-xs font-light text-white shadow-lg md:p-1.5">
                    {`NEW ARRIVAL`}
                  </span>
                )}
                <FontAwesomeIcon
                  icon={product?.wishlist ? heartFilled : heartLine}
                  color={product?.wishlist ? "red" : "grey"}
                  className="!absolute right-3 top-3 h-5 w-5 md:h-6 md:w-6"
                />
              </CardHeader>
              <CardBody className="p-3">
                <div className="mb-1 truncate text-sm font-medium text-black md:text-base">{product?.title}</div>
                <div className="mb-2 inline-flex items-center gap-2 text-xs text-blue-gray-500 md:text-sm">
                  <div>{product?.rating?.rate}</div>
                  <StarRating value={product?.rating?.rate} readonly />
                  <div>{`${product?.rating?.count} Reviews`}</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <AmountShow
                    withDiscount
                    className="my-auto text-base font-semibold text-black md:text-lg"
                    discount={product?.discount}
                  >
                    {product?.price}
                  </AmountShow>
                  {product?.discount && (
                    <>
                      <AmountShow className="my-auto text-sm italic line-through opacity-80 md:text-base">
                        {product?.price}
                      </AmountShow>
                      <Chip color="green" value={`- ${product?.discount}%`} size="sm" />
                    </>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
