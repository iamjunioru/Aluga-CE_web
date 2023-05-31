import styled from 'styled-components';

export const HouseCardListWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3.5rem;
  margin-top: 2rem;
`;

export const HouseCardListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 20px;
  margin-top: 2rem;
`;