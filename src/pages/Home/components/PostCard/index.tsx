import { PostCardHeader, PostCardContent, PostCardContainer } from './styles'
import Markdown from 'react-markdown'
import { formatterDateDistance } from '../../../../utils/formatter'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { Link } from 'react-router-dom'

interface PostCardProps {
  body: string
  title: string
  createdAt: string
  id: number
}

export function PostCard({ body, title, createdAt, id }: PostCardProps) {
  const { handleChangeIdPostToShow } = useContext(UserContext)

  const url = `/${id}`

  return (
    <PostCardContainer>
      <PostCardHeader>
        <div>
          <Link to={url}>
            <button onClick={() => handleChangeIdPostToShow(id)}>
              {title}
            </button>
          </Link>
        </div>
        <span>{formatterDateDistance(createdAt)}</span>
      </PostCardHeader>
      <PostCardContent>
        <Markdown>{body}</Markdown>
      </PostCardContent>
    </PostCardContainer>
  )
}
