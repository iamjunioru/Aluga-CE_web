import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #ddd;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  min-height: 90px;
  padding: 0 32px;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .header-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: rgb(233, 30, 99);
    }

    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.57;
      letter-spacing: 0.00714em;
      text-transform: none;
      text-transform: capitalize;
      color: #e91e63;
      margin-left: 8px;
      font-size: 20px;
      font-weight: 700;
    }
  }

  button.become-host {
    background-color: #e91e63;
    color: #fff;
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

    &:hover {
      background-color: #d81b60;
    }

    &:active {
      background-color: #c2185b;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(233, 30, 99, 0.5);
    }

    &:disabled {
      background-color: #e91e63;
      opacity: 0.5;
      cursor: not-allowed;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderUser = styled.div`
 
`;
