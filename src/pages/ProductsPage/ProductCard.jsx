import React from "react";
import { Card, CardHeader, CardBody, Typography, IconButton, Button, Rating } from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartLine } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <Card className="h-auto w-full max-w-md rounded-none shadow duration-300 hover:shadow-lg">
      <CardHeader className="m-0 h-96 rounded-none shadow-none">
        <img src={product.image} alt="card-image" className="h-full w-full object-cover" />
        {product?.discount && (
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-800 p-1.5 text-center text-xs font-extralight text-white">
            {`${product?.discount}% OFF`}
          </span>
        )}
        {product?.newArrival && (
          <span className="absolute left-0 top-0 rounded-br-lg bg-pink-300 p-1.5 text-center text-xs font-extralight text-white">
            {`NEW ARRIVAL`}
          </span>
        )}
      </CardHeader>
      <CardBody>
        <Typography className="truncate  font-medium text-black">{product?.title}</Typography>
        <div className="mb-2 inline-flex gap-2 text-sm text-blue-gray-500">
          <div className="my-auto">{product?.rating?.rate}</div>
          <Rating value={Math.round(product?.rating?.rate)} readonly className="my-auto" />
          <div className="my-auto">{`${product?.rating?.count} Reviews`}</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-2">
            <Typography className="my-auto font-semibold text-black">
              &#8377;
              {product?.discount
                ? Math.round(Number(product?.price) * Number(product?.discount)) / 100
                : Number(product?.price)}
            </Typography>
            {product?.discount && (
              <Typography className="my-auto text-sm italic line-through">&#8377;{Number(product?.price)}</Typography>
            )}
          </div>
          <div className="flex flex-row gap-2">
            <IconButton
              size="sm"
              ripple={true}
              className="bg-red-900/10 px-4 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none active:scale-100"
            >
              <FontAwesomeIcon icon={product?.wishlist ? heartFilled : heartLine} color="red" />
            </IconButton>
            <Button
              size="sm"
              ripple={true}
              fullWidth={true}
              className=" bg-green-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
