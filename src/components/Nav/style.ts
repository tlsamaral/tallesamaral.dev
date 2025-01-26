import styled from 'styled-components';

export const NavMenu = styled.nav`
  @media (max-width: 568px) {
    position: fixed;
    height: calc(100vh - 80px) !important;
    background: #000000;
    padding: 20px;
    width: 100%;
    right: 0;
    top: 80px;
    z-index: 78;
    transform: translate(100%);
    transition: transform 0.3s ease-in-out;
    ul {
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    &.active {
      transform: translate(0%);
    }
  }
`;
