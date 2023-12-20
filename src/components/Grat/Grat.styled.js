import styled from 'styled-components';

export const GratSection = styled.section`
  background-color: #30303099;

  .grat__container {
    padding: 50px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .grat_wrap {
      text-align: center;

      h2,
      h3 {
        color: white;
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 10px;
      }

      img {
        width: 100px;
        height: 100px;

        border-radius: 50%;

        margin: 0 auto;
      }

      .grat_al {
        font-size: 20px;
      }
    }
  }
`;
