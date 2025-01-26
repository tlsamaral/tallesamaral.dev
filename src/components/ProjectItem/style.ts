import styled from 'styled-components';

interface GridContainerProps {
  direction: 'left' | 'right';
}

interface ImgContentProps {
  imgUrl: string;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 20px;
  grid-template-areas: ${({ direction }) =>
    direction === 'left'
      ? `'content content content content content image image image image image'`
      : `'image image image image image content content content content content'`};
  align-items: center;

  @media (max-width: 835px) {
    grid-template-areas:
      'image image image image image image image image image image'
      'content content content content content content content content content content';
  }
`;

export const ContentProject = styled.div`
  grid-area: content;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ImageProject = styled.div`
  grid-area: image;
  width: 100%;
  max-width: 718px;
  border-radius: 10px;
  overflow: hidden;
  height: 464px;

  @media (max-width: 835px) {
    height: 322px;
  }
`;

export const ImgContent = styled.div<ImgContentProps>`
  width: 100%;
  height: 100%;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 430px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  width: 100%;
  max-width: 673px;

  @media (max-width: 430px) {
    text-align: justify;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 430px) {
    justify-content: center;
  }
`;
