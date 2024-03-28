import { Card, CardHeader, CardBody, CardFooter, IconButton, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { MetaData, StarRating, AmountShow } from "../../components/index.js";
import { useGetProductDetailsQuery } from "../../redux/api/productsApi.js";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery.jsx";

const ProductDetail = () => {
  const params = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(params);
  if (!data) return;
  const product = data[0];
  return (
    <>
      {!isLoading && (
        <>
          <MetaData title={product?.title} />
          <div className="m-1 grid grid-cols-1 gap-2 lg:grid-cols-2">
            <ImageGallery image={product?.image}></ImageGallery>

            <Card className="self-start text-center lg:text-left">
              <CardHeader floated={false} shadow={false}>
                <h4 className="mb-2 font-medium uppercase">{product?.title}</h4>
                <div className="inline-flex items-baseline gap-2">
                  <h6>{product?.rating?.rate}</h6>
                  <StarRating value={product?.rating?.rate} readonly className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <p>{`${product?.rating?.count} Reviews`}</p>
                <hr className="my-2" />
              </CardHeader>
              <CardBody className="flex flex-col items-start gap-2 p-4">
                <div className="flex flex-row items-baseline gap-3">
                  <AmountShow
                    withDiscount
                    variant="h4"
                    className="font-semibold text-black"
                    discount={product?.discount}
                  >
                    {product?.price}
                  </AmountShow>
                  <h6>{`incl. all Taxes`}</h6>
                </div>
                {product?.discount && (
                  <>
                    <p className="rounded-md bg-red-900 px-2 py-1 text-left text-white sm:px-2.5 md:px-2.5">{`Limited Time Deal`}</p>
                    <div className="flex flex-row items-baseline">
                      <h4 className="mr-2 text-red-900">{`-${product?.discount}%`}</h4>
                      <h6 className="mr-1 italic opacity-80">MRP:</h6>
                      <AmountShow variant="h6" className="italic line-through  opacity-80">
                        {product?.price}
                      </AmountShow>
                    </div>
                  </>
                )}

                <div className="flex items-center gap-3">
                  <Button
                    size="lg"
                    color="red"
                    variant="outlined"
                    className="flex items-center gap-3 self-stretch px-3 py-2 text-base"
                    ripple
                  >
                    <FontAwesomeIcon icon={product?.wishlist ? heartFilled : heartLine} />
                    <div className="hidden sm:block">Add to Wishlist</div>
                  </Button>
                  <Button
                    size="lg"
                    color="blue-gray"
                    variant="outlined"
                    className="flex items-center gap-3 px-3 py-2 text-base duration-500 hover:bg-blue-gray-800 hover:text-white"
                    ripple
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                    <div>Add to Cart</div>
                  </Button>
                </div>

                {/* <div className="mb-3 flex flex-row items-center gap-2">
                  <IconButton
                    size="sm"
                    ripple={true}
                    className={`${product?.wishlist ? "bg-red-900/10" : "bg-gray-900/10"} px-5 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none`}
                  >
                    <FontAwesomeIcon
                      icon={product?.wishlist ? heartFilled : heartLine}
                      color={product?.wishlist ? "red" : "inherit"}
                    />
                  </IconButton>
                  <Button
                    size="sm"
                    ripple={true}
                    fullWidth={true}
                    className="bg-gray-900/10 text-blue-gray-900 shadow-none duration-300 hover:scale-105 hover:shadow-none active:scale-100 md:text-sm"
                  >
                    Add to Cart
                  </Button>
                </div> */}
              </CardBody>
              <CardFooter divider className="p-4 text-justify">
                <h6 className="text-black">DETAILS</h6>
                <h6>{product.description}</h6>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
