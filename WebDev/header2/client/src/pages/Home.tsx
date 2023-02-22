import * as React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 4%;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: center;

  animation-direction: normal;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: moveDownAndfadeIn;
  @keyframes moveDownAndfadeIn {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  li {
    margin: 7px 12px 1px;

    a {
      color: var(--main-text-color);
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;
      padding-bottom: 20px;

      img {
        max-height: 26px;
      }
    }

    a:hover,
    a:active {
      color: rgb(84, 55, 88);
      border-bottom: 4px solid var(--title-text-color);
    }
  }
`;

const Home = () => {
  return (
    <main>
      <MainContainer>
        <Menu>
          <li>
            <a
              href="https://twitter.com/BitMages"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>{" "}
        </Menu>
      </MainContainer>
    </main>
  );
};

export default Home;
