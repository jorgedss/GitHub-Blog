import {
  PostCardHeader,
  PostCardContent,
  PostCardContainer,
  AuthorProfileImage,
  Label,
  ButtonContainer,
} from './styles'
import Markdown from 'react-markdown'
import { formatterDateDistance } from '../../../../utils/formatter'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { Link } from 'react-router-dom'
import { IshuesDataTypes } from '../../../../@types/GithubDataTypes'

interface PostCardProps {
  ishue: IshuesDataTypes
}

export function PostCard({ ishue }: PostCardProps) {
  const { handleChangeIdPostToShow } = useContext(UserContext)

  const url = `/${ishue.id}`

  return (
    <PostCardContainer>
      <PostCardHeader>
        <Label variant={ishue.state}>
          {ishue.state === 'open' ? 'ABERTA' : 'FECHADA'}
        </Label>
        <div>
          <AuthorProfileImage>
            <img src={ishue.user.avatar_url} alt="Foto de perfil" />
          </AuthorProfileImage>
          <Link to={url} style={{ textDecoration: 'none' }}>
            <ButtonContainer>
              <button onClick={() => handleChangeIdPostToShow(ishue.id)}>
                {ishue.title}
              </button>
            </ButtonContainer>
          </Link>
        </div>
        <span>{formatterDateDistance(ishue.created_at)}</span>
      </PostCardHeader>
      <PostCardContent>
        <Markdown>{ishue.body}</Markdown>
      </PostCardContent>
    </PostCardContainer>
  )
}
