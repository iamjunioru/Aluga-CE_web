import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInContent = styled.div`
  background-color: aliceblue;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  height: 640px;
  max-width: 40rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
  justify-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 1020px;
  max-height: 40rem;
  height: 640px;
  background-color: aliceblue;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-size: 1rem;
  font-weight: 400;
  color: #29292e;

  &::placeholder {
    color: #8d8d99;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  border: 0;
  background: #835afd;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: #e7e9ee;
    color: #29292e;
    cursor: not-allowed;
  }
`;
