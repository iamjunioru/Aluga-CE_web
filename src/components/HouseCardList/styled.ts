import styled from 'styled-components';

export const HouseCardListWrapper = styled.div`
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: 0 var(--padding-page);
  margin-top: 2rem;
`;

export const HouseCardListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;
`;