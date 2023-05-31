import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid var(--gray-light);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  min-height: 90px;
  padding: 0 32px;
  max-width: var(--page-max-width);
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .header-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: var(--secondary);
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
      font-size: 1.5rem;
      font-weight: 700;
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
