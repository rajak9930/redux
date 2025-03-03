import React, { lazy, Suspense } from "react";
//import LazyComponent from "./compoents/LazyComponent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Images from "./compoents/Images";

const LazyComponent = lazy(() => import("./compoents/LazyComponent"));

function Index() {
  let isCheck = true;

  return (
    <div>
      <h1>Lazy Loading </h1>

      <Images src={"https://picsum.photos/seed/picsum/200/300"} alt={"01"} />
      <Images src={"https://picsum.photos/200/300?grayscale"} alt={"01"} />
      <Images src={"https://picsum.photos/id/237/200/300"} alt={"01"} />

      {isCheck ? (
        <Suspense fallback={<h1>loading .......</h1>}>
          <LazyComponent />
        </Suspense>
      ) : (
        <h1> is Check Loading</h1>
      )}
    </div>
  );
}

export default Index;
