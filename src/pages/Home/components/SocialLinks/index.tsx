import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { SocialLinksContainer, SocialLinksContent } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export function SocialLinks() {
  const { githubData } = useContext(UserContext)

  return (
    <SocialLinksContainer>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/jorgedss">jorgedss</a>
      </SocialLinksContent>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faUserGroup} /> {githubData?.followers}
        {githubData?.followers === 1 ? ' Seguidor' : ' Seguidores'}
      </SocialLinksContent>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faLocationDot} />
        João Pessoa, PB
      </SocialLinksContent>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faEnvelope} />
        jorgesouza621@gmail.com
      </SocialLinksContent>
    </SocialLinksContainer>
  )
}
