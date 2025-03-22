import { FaGithub } from 'react-icons/fa'
import { RiLinkM } from 'react-icons/ri'
import {
  GridContainer,
  ContentProject,
  ImageProject,
  ImgContent,
  MainContent,
  Description,
  Title,
  ButtonList,
} from './style'
import TagList from '../TagList/TagList'
import Btn from '../Btn/Btn'
import { toast } from 'sonner'
import type { ProjectsProps } from '../Projects/Projects'

interface IProjectItemProps {
  project: ProjectsProps['projects'][number]
  className?: string
  direction: 'left' | 'right'
}

function ProjectItem({ project, className, direction }: IProjectItemProps) {
  const { name, description, tags, appUrl, repositoryUrl, banner } = project

  const timeToast = 2050
  const promiseRedirect = (link: string) => {
    toast.loading('Redirecting...', {
      duration: timeToast,
    })
    setTimeout(() => {
      window.open(link, '_blank')
      toast.dismiss()
    }, timeToast)
  }

  const handleRepositoryClick = () => {
    if (repositoryUrl) return

    promiseRedirect(repositoryUrl)
  }

  const handleLiveDemoClick = () => {
    if (appUrl) return

    promiseRedirect(appUrl)
  }

  return (
    <li className={className}>
      <GridContainer direction={direction}>
        <ContentProject>
          <MainContent>
            <Title className="poppins-bold">{name}</Title>
            <Description className="poppins-regular">{description}</Description>
            <TagList
              taglist={tags}
              className="justify-center md:justify-normal"
            />
          </MainContent>
          <ButtonList>
            {repositoryUrl && (
              <Btn
                type="button"
                variant="leaked"
                onClick={handleRepositoryClick}
              >
                Access this repository
                <FaGithub />
              </Btn>
            )}
            {appUrl && (
              <Btn
                type="button"
                variant="default"
                onClick={handleLiveDemoClick}
              >
                Visit the project
                <RiLinkM className="icon-black" />
              </Btn>
            )}
          </ButtonList>
        </ContentProject>
        <ImageProject>
          <ImgContent imgUrl={banner || '/pub-default.png'} />
        </ImageProject>
      </GridContainer>
    </li>
  )
}

export default ProjectItem
