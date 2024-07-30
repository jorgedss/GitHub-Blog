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
import { SocialLinks } from '../components/SocialLinks'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePic>
        <img
          src="https://static1.purepeople.com.br/articles/7/36/66/17/@/4202918-gretchen-um-dos-memes-da-cantora-comeco-580x0-2.png"
          alt="Foto de perfil"
        />
      </ProfilePic>

      <ProfileInfos>
        <ProfileInfosContent>
          <ProfileName>Ana Carla Bitencour</ProfileName>
          <Link>
            <a href="https://github.com/jorgedss">GITHUB</a>

            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileInfosContent>
        <ProfileBio>
          Ana Carla Bitencour é uma visionária e líder de destaque na indústria
          de tecnologia, ocupando o cargo de CEO da Samsung.
        </ProfileBio>
        <SocialLinks />
      </ProfileInfos>
    </ProfileContainer>
  )
}
