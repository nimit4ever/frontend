import React from "react";
import { Carousel } from "@material-tailwind/react";

const ImageGallery = ({ image }) => {
  const [activeImage, setActiveImage] = React.useState(image[0].url);
  return (
    <div className="grid h-auto grid-cols-5 gap-2 self-start rounded-lg p-2 shadow duration-300 hover:shadow-lg">
      <div className="col-span-4">
        <img className="h-auto w-full rounded-lg object-cover object-center" src={activeImage} alt="" />
      </div>
      <div className="flex flex-col items-stretch gap-2">
        {image.map(({ url }, index) => (
          <img
            key={index}
            onClick={() => setActiveImage(url)}
            src={url}
            className="h-auto max-h-[160px] w-full cursor-pointer rounded-md object-cover object-center md:max-h-[260px]"
            alt="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

<Carousel loop={true} autoplay={true} className="rounded-xl">
  <img
    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    alt="image 1"
    className="h-full w-full object-cover object-center"
  />
  <img
    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    alt="image 2"
    className="h-full w-full object-cover object-center"
  />
  <img
    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    alt="image 3"
    className="h-full w-full object-cover object-center"
  />
</Carousel>;
