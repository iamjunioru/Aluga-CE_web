import styled from "styled-components";

export const PropertyInfoWrapper = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PropertyInfoContent = styled.div`
  width: 100%;
  max-width: var(--page-max-width);
  padding: 1rem var(--padding-page);
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 1rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .property-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;

    .property-info__details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      height: 100px;
    }

    .property-Images {
      min-height: 560px;
      height: 560px;
      max-height: 560px;
      min-width: 100%;
      max-width: 100%;
      background-color: red;
    }
  }

  .property-owner-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: orange;
    width: 100%;
    height: 100px;
    position: sticky;
    top: 100px;
  }
`;

export const PropertyInfoHeader = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text);

  .property-info__texts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .property-info__type h3 {
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 400;
  }

  h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PropertyInfoImages = styled.div`
  min-height: 560px;
  height: 560px;
  max-height: 560px;
  min-width: 100%;
  max-width: 100%;
  position: relative;

  .image-swipper {
    width: 100%;
    height: 560px;

    @media (max-width: 800px) {
      height: 300px;
    }
  }
`;

export const PropertyInfoOwnerContact = styled.section`
  width: 100%;
  height: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  min-height: 300px;
  position: sticky;
  top: 100px;
  border-radius: var(--border-radius);
  border: 1px solid var(--text);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

export const PropertyInfoDescriptionDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .property-description {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    border: 1px solid var(--gray-light);
    padding: 1rem;
  }
`;
