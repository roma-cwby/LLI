import { styled } from 'styled-components';

export const ListSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  width: 100vw;

  overflow: hidden;
  /* background-color: #ffe4c450; */
  background-color: transparent;

  @media (min-width: 768px) {
    overflow: unset;
  }

  .list__container {
    position: relative;

    height: 100%;
    width: 100%;

    padding: 0 50px;

    @media (min-width: 768px) {
      padding: 0 50px;
      max-width: none;
    }
  }

  .list__slide-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;

    padding: 20px 20px;

    border: none;
    background-color: transparent;
    color: black;

    svg {
      width: 50px;
      height: 50px;

      transition: fill 300ms linear;
    }

    &:hover,
    &:focus {
      cursor: pointer;
      border: none;

      & {
        svg {
          fill: red;
        }
      }
    }
  }

  & ul {
    position: relative;

    width: 100%;
    height: 100%;

    li {
      position: absolute;

      width: 200px;
      max-width: 50vw;
      height: 200px;

      transform: translate(-50%, -50%);
      transition: all 1s ease-in-out;

      background-color: transparent;

      &.show {
        animation: heart 800ms 1s;

        svg {
          fill: #d50000;
        }

        &:hover {
          svg {
            filter: none;
          }
        }

        p {
          color: #ffffff;
        }
      }

      svg {
        width: 100%;
        height: 100%;

        transition: fill 500ms linear 100ms, filter 300ms linear;

        fill: #303030;

        filter: drop-shadow(0 0 1px #ff0000);
      }

      &:hover {
        cursor: pointer;

        svg {
          /* fill: #ff0000; */
          filter: drop-shadow(0 0 20px #0000ff);
        }
      }

      p {
        position: absolute;
        top: 50%;
        left: 50%;

        max-width: 70%;

        text-align: center;
        font-size: 15px;

        transform: translate(-50%, -50%);

        transition: color 300ms linear 400ms;

        z-index: 1;
        color: transparent;

        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }

    @keyframes heart {
      10% {
        transform: translate(-50%, -50%) scale(2.05);
        transition: transform 100ms linear;
      }
      20% {
        transform: translate(-50%, -50%) scale(2);
        transition: transform 100ms linear;
      }
      40% {
        transform: translate(-50%, -50%) scale(2.05);
        transition: transform 100ms linear;
      }
      50% {
        transform: translate(-50%, -50%) scale(2);
        transition: transform 100ms linear;
      }
    }
  }
`;
