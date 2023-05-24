import styled from "styled-components";

export const ImageCarrousselWrapper = styled.div`
  width: 100%;
  height: 100%;

  .carousel {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 800px;
  }

  .carousel_wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .carousel_card {
    display: flex;
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8);
    transition: 0.5s ease-in-out;
  }

  .carousel_card-active {
    opacity: 1;
    pointer-events: visible;
  }

  .card_image {
    width: 100%;
  }

  .card_overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  .card_title {
    color: white;
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }

  .carousel_arrow_left,
  .carousel_arrow_right {
    position: absolute;
    font-size: 40px;
    top: 50%;
    transform: translate(0, -50%);
    background-color: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding-bottom: 7px;
    cursor: pointer;
  }

  .carousel_arrow_left {
    left: 15px;
  }

  .carousel_arrow_right {
    right: 15px;
  }

  .carousel_pagination {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .pagination_dot {
    height: 10px;
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }

  .pagination_dot:hover {
    transform: scale(1.2);
  }

  .pagination_dot-active {
    background-color: #0096C6;
    width: 20px;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
  }

  @keyframes animate {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-800px);
    }
  }
`;
