import styled from "styled-components";

export const ImageCarouselWrapper = styled.div`
  color: var(--text);
  min-width: 270px;
  width: 100%;

  .house-card_info {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 0.5rem;
    background-color: var(--background-secondary);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 0.5rem;
  }

  .house-card_info-text {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.2rem;
    grid-template-rows: 3fr;
  }

  .house-card_info-text h4, h3 {
    line-height: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .house-rating {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  & img {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .carouselCard .MuiMobileStepper-root {
    opacity: 1;
    transition: all ease 1000ms;
  }

  .carouselCard:hover .MuiMobileStepper-root {
    opacity: 1;
  }

  .carouselCard .MuiMobileStepper-dotActive {
    background-color: var(--white);
  }

  .carouselCard button {
    background-color: var(--white);
  }

  .carouselCard {
    position: relative;
    width: 100%;
  }
`;
