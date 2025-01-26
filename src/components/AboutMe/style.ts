import styled from 'styled-components'

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-areas:
    'image image image text text text text text text text'
    'subtext subtext subtext subtext subtext subtext subtext subtext subtext subtext'
    'footer-text footer-text footer-text footer-text footer-text footer-text footer-text footer-text footer-text footer-text';

  @media (max-width: 835px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-areas:
      'image image image image text text text text'
      'image image image image text text text text'
      'image image image image text text text text'
      'subtext subtext subtext subtext text text text text'
      'subtext subtext subtext subtext text text text text'
      'subtext subtext subtext subtext text text text text'
      'subtext subtext subtext subtext text text text text'
      'footer-text footer-text footer-text footer-text text text text text';
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ImageArea = styled.div`
  grid-area: image;
  @media (max-width: 430px) {
    pictura {
      border-radius: 50%;
    }
  }
`

export const TextArea = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 835px) {
    padding-right: 16px;
  }
`

export const SubTextArea = styled.div`
  grid-area: subtext;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const FooterTextArea = styled.div`
  grid-area: footer-text;
`

export const StrongText = styled.strong`
  font-family: inherit;
  font-weight: 700;
`
