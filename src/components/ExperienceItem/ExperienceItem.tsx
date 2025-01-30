import dayjs from 'dayjs'
import TagList from '../TagList/TagList'

interface ExperienceItemProps {
  company: string
  position: string
  description: string
  tags: string[]
  allSpace: boolean
  startDate: string
  endDate: string
}

function ExperienceItem({
  company,
  position,
  description,
  tags,
  startDate,
  endDate,
  allSpace,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div
          className={`flex flex-col sm:flex-row ${
            allSpace ? 'justify-center items-center' : ''
          }`}
        >
          <h3 className="text-lg sm:text-2xl inter-font font-extrabold">
            {company}/
          </h3>
          <h4 className="text-lg sm:text-2xl inter-font font-normal">
            {position}
          </h4>
        </div>
        <div
          className={`flex ${allSpace ? 'justify-center items-center' : ''}`}
        >
          <small className="poppins-light">
            {dayjs(startDate).format('MMM YYYY')} -{' '}
            {dayjs(endDate).format('MMM YYYY')}
          </small>
        </div>
      </div>
      <div
        className={`${
          allSpace ? 'max-w-[800px]' : 'max-w-[500px]'
        } flex flex-col gap-4`}
      >
        <p
          className={`${
            allSpace ? 'text-center' : 'text-start'
          } inter-font text-base sm:text-lg font-bold`}
        >
          {description}
        </p>
        <TagList taglist={tags} className={allSpace ? 'justify-center' : ''} />
      </div>
    </div>
  )
}

export default ExperienceItem
