import { useEffect } from "react";
import { useState } from "react";

import { ImageDataLogin } from "../../pages/SignIn/utils/imageDataLogin";

interface CarouselProps {
  images: ImageDataLogin[];
  isAutoPlay?: boolean;
  showArrows?: boolean;
}

import { ImageCarrousselWrapper } from "./styled";

function ImageCarousel({ images, isAutoPlay, showArrows }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  
  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (autoPlay && isAutoPlay) {
      timeOut = setTimeout(() => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
      }, 3000);
    }
    return () => clearTimeout(timeOut);

  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <ImageCarrousselWrapper>
      <div
        className="carousel"
        onMouseEnter={() => {
          isAutoPlay && setAutoPlay(false)
        }}
        onMouseLeave={() => {
          isAutoPlay && setAutoPlay(true);
        }}
      >
        <div className="carousel_wrapper">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={image.image} alt="" />
                <div className="card_overlay">
                  <h2 className="card_title">{image.title}</h2>
                </div>
              </div>
            );
          })}
          {showArrows && (
            <>
              <div className="carousel_arrow_left" onClick={slideLeft}>
                &lsaquo;
              </div>
              <div className="carousel_arrow_right" onClick={slideRight}>
                &rsaquo;
              </div>
            </>
          )}
          <div className="carousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </ImageCarrousselWrapper>
  );
}

export default ImageCarousel;
