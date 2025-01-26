import { TagArea } from './style'
import propTypes from 'prop-types'

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

Tag.propTypes = {
  tagName: propTypes.string.isRequired,
}
