import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border-bottom: solid 1px #fff;
  background-color: transparent;
  outline: none;
  padding: 4px;
  &:focus {
    border: none;
    border-bottom: solid 1px #fff;
  }
`

export const Label = styled.label`
  font-size: 24px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border-bottom: solid 1px #fff;
  background-color: transparent;
  outline: none;
  padding: 4px;
  height: 40px;

  &:focus {
    border: none;
    border-bottom: solid 1px #fff;
  }
`
