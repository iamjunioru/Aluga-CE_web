import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-top-color: #333;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;