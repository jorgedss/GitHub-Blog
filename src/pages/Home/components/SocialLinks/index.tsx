import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { SocialLinksContainer, SocialLinksContent } from './styles'

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/jorgedss">jorgedss</a>
      </SocialLinksContent>
      <SocialLinksContent>
        <FontAwesomeIcon icon={faUserGroup} /> 0 Seguidores
      </SocialLinksContent>
    </SocialLinksContainer>
  )
}
