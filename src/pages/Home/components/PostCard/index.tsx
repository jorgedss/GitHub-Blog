import {
  PostCardHeader,
  PostCardContent,
  PostCardContainer,
  AuthorProfileImage,
} from './styles'
import Markdown from 'react-markdown'
import { formatterDateDistance } from '../../../../utils/formatter'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { Link } from 'react-router-dom'
import { UserDataTypes } from '../../../../@types/GithubDataTypes'

interface PostCardType {
  body: string
  title: string
  created_at: string
  id: number
  user: UserDataTypes
}

interface PostCardProps {
  ishue: PostCardType
}

export function PostCard({ ishue }: PostCardProps) {
  const { handleChangeIdPostToShow } = useContext(UserContext)

  const url = `/${ishue.id}`

  return (
    <PostCardContainer>
      <PostCardHeader>
        <div>
          <AuthorProfileImage>
            <img src={ishue.user.avatar_url} alt="Foto de perfil" />
          </AuthorProfileImage>
          <Link to={url}>
            <button onClick={() => handleChangeIdPostToShow(ishue.id)}>
              {ishue.title}
            </button>
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
