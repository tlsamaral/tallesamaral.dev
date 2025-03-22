import { TagArea } from './style'

interface ITagProps {
  tagName: string
}

function Tag({ tagName }: ITagProps) {
  return (
    <TagArea>
      <span className="text-xs inter-font">{tagName}</span>
    </TagArea>
  )
}

export default Tag
