import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
`;

export const SignInContent = styled.div`
  background-color: var(--background-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 640px;
  max-width: 40rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 1020px;
  max-height: 40rem;
  height: 640px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text);
  }

  p.dont-have-account {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--gray-light);
    text-align: center;

    span {
      color: var(--primary);
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: var(--input-button-height);
  margin-top: 1rem;
  border-radius: var(--border-radius);
  border: 0;
  background: var(--primary);
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
`;
