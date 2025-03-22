import { Text } from './style'
import React from 'react'

interface IChildrenText {
  children: React.ReactNode
}

const TextEffect: React.FC<IChildrenText> = ({ children }) => {
  return <Text>{children}</Text>
}

export default TextEffect
