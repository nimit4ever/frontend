import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Button,
  Rating,
  Chip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine, faStar as starLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled, faStar as starFilled } from "@fortawesome/free-solid-svg-icons";

import { MetaData, StarRating, AmountShow } from "../../../components/index.js";
import { useGetProductDetailsQuery } from "../../../redux/api/productsApi.js";
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

                <div className="mb-3 flex flex-row gap-2 self-stretch">
                  <IconButton
                    ripple={true}
                    className={`${product?.wishlist ? "bg-red-900/10" : "bg-gray-900/10"} px-6 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none`}
                  >
                    <FontAwesomeIcon
                      icon={product?.wishlist ? heartFilled : heartLine}
                      color={product?.wishlist ? "red" : "inherit"}
                      className="h-5 w-5"
                    />
                  </IconButton>
                  <Button
                    ripple={true}
                    fullWidth={true}
                    className="bg-gray-900/10 text-blue-gray-900 shadow-none duration-300 hover:scale-105 hover:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardBody>
              <CardFooter divider className="p-4 text-justify">
                <h6 className="text-black">DETAILS</h6>
                <p>{product.description}</p>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
