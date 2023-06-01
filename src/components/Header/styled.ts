import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: var(--background);
  border-bottom: 1px solid var(--gray-light);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 var(--padding-page);
  max-width: var(--page-max-width);
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      color: var(--secondary);
      width: clamp(2rem, 5vw, 3rem);
    }

    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.57;
      letter-spacing: 0.00714em;
      text-transform: none;
      text-transform: capitalize;
      color: var(--primary);
      margin-left: 8px;
      font-size: clamp(1rem, 5vw, 2rem);
      font-weight: 700;
    }

    @media (max-width: 500px) {
      h3 {
        display: none;
      }
    }
  }

  button.become-host {
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    color: var(--primary);
  }
`;
