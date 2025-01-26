import styled from 'styled-components';

const Text = styled.span`
  font-size: 36px;
  background: linear-gradient(to right, #9c83ff, #ff9051);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;

  @media (max-width: 835px) {
    font-size: 20px;
  }
`;

export { Text };
