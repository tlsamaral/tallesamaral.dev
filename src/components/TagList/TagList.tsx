import Tag from '../Tag/Tag'

interface ITagListProps {
  taglist: string[]
  className?: string
}
function TagList({ taglist, className }: ITagListProps) {
  return (
    <ul className={`flex gap-2 flex-wrap ${className}`}>
      {taglist.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </ul>
  )
}

export default TagList
