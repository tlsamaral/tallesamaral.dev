import styled from 'styled-components';

interface IPropsBtn {
  variant: string;
}

export const Button = styled.button<IPropsBtn>`
  padding: 8px 15px;
  border: ${({ variant }) =>
    `${variant === 'default' ? 'none' : 'solid 1px #fff'}`};
  background: ${({ variant }) =>
    `${variant === 'default' ? '#fff' : 'transparent'}`};
  border-radius: 8px;

  & > span {
    color: ${({ variant }) => `${variant === 'default' ? '#000' : '#fff'}`};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }
`;
