import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Images = ({ src, alt }) => {
  return (
    <LazyLoadImage
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      alt={alt}
      effect="blur"
      src={src}
    />
  );
};

export default Images;
