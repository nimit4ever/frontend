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

import { MetaData } from "../../../components/index.js";
import { useGetProductDetailsQuery } from "../../../redux/api/productsApi.js";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(params);
  if (!data) return;
  console.log(data);
  const product = data[0];
  return (
    <>
      {!isLoading && (
        <>
          <MetaData title={product?.title} />
          <div className="container mx-auto p-2">
            <Card className="mx-auto h-auto w-full max-w-lg rounded-none shadow duration-300 hover:shadow-lg">
              <CardHeader className="m-0  rounded-none shadow-none">
                <img src={product?.image} alt="card-image" className="h-full w-full object-cover" />
                {product?.discount && (
                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-800 p-1.5 text-center text-xs font-light text-white">
                    {`${product?.discount}% OFF`}
                  </span>
                )}
                {product?.newArrival && (
                  <span className="absolute left-0 top-0 rounded-br-lg bg-pink-300 p-1.5 text-center text-xs font-extralight text-white">
                    {`NEW ARRIVAL`}
                  </span>
                )}
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
