import { Card, CardBody, CardHeader, Chip } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MetaData, Loader, OfferBadge, StarRating, ToastMassage, AmountShow } from "../../../components/index.js";
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
        <div className="m-1 grid grid-cols-2 items-stretch gap-1 text-xs md:m-2 md:gap-2 md:text-sm lg:grid-cols-3 lg:text-base xl:m-4 xl:gap-4 2xl:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="h-auto w-full max-w-sm rounded-none text-blue-gray-900 shadow-lg">
              <CardHeader className="m-0 h-full max-h-[280px] w-full rounded-none object-cover object-center shadow-none sm:max-h-[360px] md:max-h-[480px]">
                <Link to={`/products/${product?._id - 1}`}>
                  <img src={product?.image[0].url} alt={product?.title} />
                </Link>
                <OfferBadge product={product} />

                {/* {product?.discount && (
                  <p className="!absolute left-0 top-0 rounded-br-lg bg-red-900 px-1.5 py-1 font-light text-white shadow-lg md:px-2 md:text-sm">
                    {`${product.discount}% OFF`}
                  </p>
                )}
                {product?.newArrival && (
                  <p className="!absolute left-0 top-0 rounded-br-lg bg-pink-300 px-1.5 py-1 font-light text-white shadow-lg md:px-2 md:text-sm">
                    {`NEW ARRIVAL`}
                  </p>
                )} */}

                <FontAwesomeIcon
                  icon={product?.wishlist ? heartFilled : heartLine}
                  color={product?.wishlist ? "red" : "grey"}
                  className="!absolute right-2 top-2 h-5 w-5 p-1 md:h-6 md:w-6"
                />
              </CardHeader>
              <CardBody className="p-3">
                <h6 className="mb-1 truncate font-medium uppercase">{product?.title}</h6>
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
                    className="font-semibold text-red-900"
                    discount={product?.discount}
                  >
                    {product?.price}
                  </AmountShow>
                  {product?.discount && (
                    <>
                      <AmountShow className="italic line-through opacity-90">{product?.price}</AmountShow>
                      <p className="rounded-md bg-red-900 px-1.5 py-0.5 text-white sm:px-2 md:px-2 md:text-sm lg:py-1">{`${product?.discount}% off`}</p>
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
