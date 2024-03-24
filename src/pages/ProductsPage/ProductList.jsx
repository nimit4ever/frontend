import { Card, CardBody, CardHeader, Chip } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MetaData, Loader, StarRating, ToastMassage, AmountShow } from "../../../components/index.js";
import { useGetProductsQuery } from "../../../redux/api/productsApi.js";
import { useEffect } from "react";
const offset = Math.round(Math.random() * 80);

const ProductList = () => {
  const { data, isLoading, error, isError } = useGetProductsQuery({ offset });
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
        <div className="m-1 grid grid-cols-2 items-stretch gap-1 text-xs md:text-sm lg:grid-cols-3 lg:text-base 2xl:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="h-auto w-full max-w-sm rounded-none shadow duration-300 hover:shadow-lg">
              <CardHeader className="m-0 h-full max-h-[280px] w-full rounded-none object-cover object-center shadow-none sm:max-h-[360px] md:max-h-[480px]">
                <Link to={`/products/${product?._id - 1}`}>
                  <img src={product?.image[0].url} alt={product?.title} />
                </Link>
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
                  className="!absolute right-2 top-2 h-5 w-5 p-1 md:h-6 md:w-6"
                />
              </CardHeader>
              <CardBody className="p-3">
                <h6 className="mb-1 truncate font-medium uppercase text-black">{product?.title}</h6>
                <div className="mb-2 inline-flex items-baseline gap-2 text-blue-gray-500 ">
                  <p>{product?.rating?.rate}</p>
                  <StarRating
                    value={product?.rating?.rate}
                    readonly
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
                  />

                  <p className="hidden sm:block">{`${product?.rating?.count} Reviews`}</p>
                  <p className="sm:hidden">{`(${product?.rating?.count})`}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <AmountShow
                    variant="h5"
                    withDiscount
                    className="font-semibold text-black"
                    discount={product?.discount}
                  >
                    {product?.price}
                  </AmountShow>
                  {product?.discount && (
                    <>
                      <AmountShow className="italic line-through opacity-80">{product?.price}</AmountShow>
                      <Chip
                        color="green"
                        value={`SAVE ${product?.discount}%`}
                        size="sm"
                        className="overflow-hidden py-0.5 sm:px-1.5 md:px-2 lg:py-1"
                      />
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
