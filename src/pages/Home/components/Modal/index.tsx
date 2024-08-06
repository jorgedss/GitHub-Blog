import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  ProfileBio,
  ProfileImage,
  Title,
} from './styles'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function Modal() {
  const { githubData } = useContext(UserContext)
  return (
    <Dialog.Portal>
      <Overlay />

      <Content aria-describedby="Modal com o perfil expandido e centralizado na tela">
        <ProfileImage>
          <img src={githubData.avatar_url} alt="Imagem de perfil" />
        </ProfileImage>
        <div>
          <Title>{githubData.name}</Title>
          <ProfileBio>{githubData.bio}</ProfileBio>
        </div>

        <CloseButton>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
