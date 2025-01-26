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

interface Links {
  repository?: string
  liveDemo?: string
}

interface ProjectProps {
  direction: 'left' | 'right'
  title: string
  description: string
  tags: string[]
  links: Links
  image?: string
}

interface IProjectItemProps {
  project: ProjectProps
  className: string
}

function ProjectItem({ project, className }: IProjectItemProps) {
  const { direction, title, description, tags, links, image } = project

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
    if (!links.repository) return

    promiseRedirect(links.repository)
  }

  const handleLiveDemoClick = () => {
    if (!links.liveDemo) return

    promiseRedirect(links.liveDemo)
  }

  return (
    <li className={className}>
      <GridContainer direction={direction}>
        <ContentProject>
          <MainContent>
            <Title className="poppins-bold">{title}</Title>
            <Description className="poppins-regular">{description}</Description>
            <TagList
              taglist={tags}
              className="justify-center md:justify-normal"
            />
          </MainContent>
          <ButtonList>
            {links.repository && (
              <Btn
                type="button"
                variant="leaked"
                onClick={handleRepositoryClick}
              >
                Access this repository
                <FaGithub />
              </Btn>
            )}
            {links.liveDemo && (
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
          <ImgContent imgUrl={image || '/pub-default.png'} />
        </ImageProject>
      </GridContainer>
    </li>
  )
}

export default ProjectItem
