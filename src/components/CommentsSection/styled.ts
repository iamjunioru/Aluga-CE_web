import styled from "styled-components";

export const CommentsSectionWrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
  padding: 1rem var(--padding-page);
  max-width: var(--page-max-width);

  .comment-header {
    display: flex;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-right: 1rem;
    }
  }
`;

export const CommentsSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;
  margin-top: 1rem;

  .comment-card__header-user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .comment-card {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--background-secondary);
    border-radius: var(--border-radius);
    transition: all ease 300ms;

    .comment-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .comment-card__header-user {
      display: flex;
      align-items: center;
    }

    .comment-card__header-user-info {
      display: flex;
      align-items: stretch;
      flex-direction: column;
      margin-left: 0.3rem;

      h3 {
        font-size: 16px;
        margin-bottom: -7px;
      }

      span {
        font-size: 12px;
        color: var(--text-secondary);
      }
    }

    h3.comment-card__rating {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .comment-card__body {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        font-size: clamp(1rem, 1vw, 1.1rem);
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }
`;
