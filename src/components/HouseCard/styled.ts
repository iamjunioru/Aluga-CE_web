import styled from "styled-components";

export const HouseCardWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;
  background: var(--background-secondary);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: var(--box-shadow);

  .house-card__image {
    width: 100%;
    height: 200px;
    border-radius: var(--border-radius);
    object-fit: cover;
  }


`;