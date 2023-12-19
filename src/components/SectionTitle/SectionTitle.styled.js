import { styled } from 'styled-components';

export const TitleSection = styled.section`
  min-height: 25vh;
  height: auto;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .section-title__container {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: inherit;

    text-align: center;

    p {
      font-size: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
  }
`;
