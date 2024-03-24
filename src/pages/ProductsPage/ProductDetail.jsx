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

            <Card className="self-start">
              <CardHeader floated={false} shadow={false} className="text-center lg:text-left">
                <h4 className="mb-2 uppercase">{product?.title}</h4>
                <div className="inline-flex gap-2">
                  <h6>{product?.rating?.rate}</h6>
                  <StarRating
                    value={product?.rating?.rate}
                    readonly
                    className="sm:h-4.5 sm:w-4.5 h-4 w-4 md:h-5 md:w-5"
                  />
                </div>
                <h6>{`${product?.rating?.count} Reviews`}</h6>

                <div className="flex flex-row items-center gap-2">
                  <AmountShow
                    withDiscount
                    className="text-sm font-semibold text-black sm:text-base md:text-xl"
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
              </CardHeader>
              <CardBody className="p-3">
                <Typography className="truncate font-medium text-black">{product?.title}</Typography>
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-blue-gray-500">
                  <div>{product?.rating?.rate}</div>
                  <Rating
                    value={Math.round(product?.rating?.rate)}
                    ratedIcon={<FontAwesomeIcon icon={starFilled} className="h-4 w-4" />}
                    unratedIcon={<FontAwesomeIcon icon={starLine} className="h-4 w-4" />}
                    readonly
                  />
                  <div>{`${product?.rating?.count} Reviews`}</div>
                </div>
                <div className="mb-3 flex flex-row gap-2">
                  <Typography className="my-auto font-semibold text-black">
                    &#8377;
                    {product?.discount
                      ? Math.round(Number(product?.price) * (100 - Number(product?.discount))) / 100
                      : Number(product?.price)}
                  </Typography>
                  {product?.discount && (
                    <>
                      <Typography className="my-auto text-sm italic line-through opacity-80">
                        &#8377;{Number(product?.price)}
                      </Typography>
                      <Chip color="green" value={`-${product?.discount}%`} size="sm" />
                    </>
                  )}
                </div>
                <div className="flex flex-row gap-2">
                  <IconButton
                    size="sm"
                    ripple={true}
                    className={`${product?.wishlist ? "bg-red-900/10" : "bg-gray-900/10"} px-4 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none active:scale-100`}
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
                    className=" bg-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardBody>
              <CardFooter>
                <Typography className="">{product?.description}</Typography>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
