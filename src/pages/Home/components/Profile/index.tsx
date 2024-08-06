import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {
  Link,
  ProfileBio,
  ProfileContainer,
  ProfileInfos,
  ProfileInfosContent,
  ProfileName,
  ProfilePic,
} from './styles'
import { SocialLinks } from '../SocialLinks'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '../Modal'

export function Profile() {
  const { githubData } = useContext(UserContext)

  return (
    <ProfileContainer>
      <ProfilePic>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <img src={githubData?.avatar_url} alt="Foto de perfil" />
            </button>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
      </ProfilePic>

      <ProfileInfos>
        <ProfileInfosContent>
          <ProfileName>{githubData?.name}</ProfileName>
          <Link>
            <a href={githubData?.html_url}>GITHUB</a>

            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileInfosContent>
        <ProfileBio>{githubData?.bio}</ProfileBio>
        <SocialLinks />
      </ProfileInfos>
    </ProfileContainer>
  )
}
